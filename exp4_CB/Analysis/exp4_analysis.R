### LOAD PACKAGES
library(dplyr)
library(plyr)
library(ggplot2)
library(stringr)
library(lsr)
library(lme4)
#library(lmTest)
library(lmerTest)
#library(simr)
library(emmeans)
library(exactRankTests)
library(pwr)
library(psych)
library(boot)
library(rcompanion)
library(rsq)
library(tidyr)
library(naniar)
library(RColorBrewer)




data = read.csv(file=file.choose(),sep = ',',header = T,na.strings=c("","NA"))


length(unique(data$subjectId))

#155


head(data)


exp3 <- subset(data, type == "testing")

is.numeric(exp3$button_pressed)

levels(exp3$condition)
levels(exp3$phrase)
levels(exp3$group)

exp3$negation <- ifelse((exp3$phrase == "does not wug." | exp3$phrase == "does not move from red upward.") , "negative", "positive")

exp2 <- subset(exp3, group != "control")

length(unique(exp2$subjectId))

exp2$cond <- ifelse(exp2$condition == "AB", "upward-from red", 
                  ifelse(exp2$condition == "notAB", "not upward-from red", 
                          ifelse(exp2$condition == "AnotB", "upward-not from red",
                              ifelse(exp2$condition == "notAnotB", "not upward-not from red", "blubb"))))

exp2$type <- ifelse(exp2$condition == "AB" | exp2$condition == "AnotB" | exp2$condition == "notAnotB" | exp2$condition == "notAB", "simple", "quantificational")

exp2$target <- ifelse(exp2$cond == "upward-from red" | exp2$cond == "not upward-not from red", "baseline", "target")

exp2$critical <- ifelse(exp2$cond == "upward-not from red" | exp2$cond == "not upward-not from red" | exp2$cond == "not upward-from red", "critical", "learned")

exp2$novelty <- ifelse((exp2$group == "wug=red" & (exp2$cond == "upward-from red" | exp2$cond == "upward-not from red")) |
                         (exp2$group == "wug=upward" & (exp2$cond == "upward-from red" | exp2$cond == "not upward-from red")) | 
                         (exp2$group == "no training" & exp2$cond == "upward-from red"),"given", "novel")
                         
                         

is.numeric(exp2$CB)


exp_qua <- subset(exp2, type == "quantificational")
exp <- subset(exp2, type == "simple")



results <- ddply(exp, .(cond, negation, group), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE) )

results_qua <- ddply(exp_qua, .(condition, group), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE))

results_pred = read.csv(file=file.choose(),sep = ';',header = T,na.strings=c("","NA"))

results$cond <- as.factor(results$cond) 
levels(results$cond)
results$cond <- factor(results$cond, levels = c("upward-from red", "not upward-from red", "upward-not from red", "not upward-not from red"))
results_pred$cond <- factor(results_pred$cond, levels = c("upward-from red", "not upward-from red", "upward-not from red", "not upward-not from red"))



### plotting
##write.table(results, file = "results.txt", sep = ",", quote = FALSE, row.names = F)

plot <- ggplot(data=subset(results_pred, exp == "predicted")) +
  geom_bar(aes(x=group, y=M, fill = negation), stat="identity", position="dodge", width = 0.8, color = "black")+
facet_wrap(~cond)+
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
 #               position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot +   labs(title="Predictions under H1a and H2a",
                           x="", y = "predicted rate of visible picture choices")

plot_m1 <- ggplot(data=subset(results, group == "wug=upward"), aes(x=cond, y=M, fill=negation)) +
  geom_bar(stat="identity", position=position_dodge())+
theme_classic(base_size = 20)  # facet_wrap(~group)+
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+


plot_m1 +   labs(title="'training: wug=upward'-group",
              x="animation", y = "mean visible picture choices")

results2 <- ddply(exp, .(cond, novelty, negation, group), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE) )


plot_m2 <- ggplot(data=results2, aes(x=group, y=M, fill = novelty)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~cond)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m2 +   labs(title="",
                x="", y = "mean visible picture choices")




results_pred_qua = read.csv(file=file.choose(),sep = ';',header = T,na.strings=c("","NA"))

plot <- ggplot(data=subset(results_pred_qua, sentence == "none wugged "), aes(x=exp, y=M, fill = group)) +
  geom_bar(stat="identity", position=position_dodge(),width = 0.8, color = "black")+
  facet_wrap(~condition)+
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
 theme_classic(base_size = 20) 

plot +   labs(title="Quantifier 'none'",
              x="", y = "rate of visible picture choices")

levels(results_pred_qua$condition)

plot_rt_qua <- ggplot(data=results_qua, aes(x=condition, y=RT)) +
  geom_bar(stat="identity", position=position_dodge())
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_rt_qua +   labs(title="",
              x="", y = "RTs")





#### STATS


model_0 <- glmer(button_pressed ~ novelty*cond + (1+cond| subjectId), 
                  family = "binomial", 
                  data =  exp,
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_0)

model_0b <- glmer(button_pressed ~ novelty+cond + (1+cond| subjectId), 
                 family = "binomial", 
                 data =  exp,
                 control=glmerControl(optimizer="bobyqa",
                                      optCtrl=list(maxfun=2e5)))


summary(model_0b)

anova(model_0, model_0b)


model_0a <- glmer(button_pressed ~ group*cond + (1+cond| subjectId), 
                 family = "binomial", 
                 data =  exp,
                 control=glmerControl(optimizer="bobyqa",
                                      optCtrl=list(maxfun=2e5)))


summary(model_0a)

model_0c <- glmer(button_pressed ~ group+cond + (1+cond| subjectId), 
                  family = "binomial", 
                  data =  exp,
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_0c)

anova(model_0a, model_0c)


###


model_1a <- glmer(button_pressed ~ cond*negation*group + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_1a)

model_1b <- glmer(button_pressed ~ cond+negation+group + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_1b)



anova(model_1a, model_1b)

texreg(list(model_1a, model_1b), use.packages = FALSE, label = "Table 1", caption = "Two linear models.",
       float.pos = "h")

contrasts_1a <- emmeans(model_1a, ~cond*negation*group)
sum <- summary(contrast(contrasts_1a, "tukey", simple = "each", combine = TRUE, adjust="none"))



## hypothesis 1


model_2a <- glmer(button_pressed ~ cond*negation + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, group == "no training" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_2a)


model_2b <- glmer(button_pressed ~ negation+cond + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, group == "no training" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_2b)

anova(model_2a, model_2b)


texreg(list(model_2a, model_2b), use.packages = FALSE, label = "Table 1", caption = "Two linear models.",
       float.pos = "h")

contrasts_2a <- emmeans(model_2a, ~negation*cond)
summary(contrast(contrasts_2a, "tukey", simple = "each", combine = TRUE, adjust="none"))


model_3a <- glmer(button_pressed ~ group*negation + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, cond == "not upward-from red" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_3a)


model_3b <- glmer(button_pressed ~ negation+group + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, cond == "not upward-from red" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_3b)

anova(model_3a, model_3b)


model_4a <- glmer(button_pressed ~ group*negation + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, cond == "upward-not from red" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_4a)


model_4b <- glmer(button_pressed ~ negation+group + (1| subjectId), 
                  family = "binomial", 
                  data =  subset(exp, cond == "upward-not from red" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_4b)

anova(model_4a, model_4b)


contrasts_4a <- emmeans(model_4a, ~negation*group)
summary(contrast(contrasts_4a, "tukey", simple = "each", combine = TRUE, adjust="none"))




