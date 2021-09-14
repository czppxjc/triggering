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

#13


head(data)


exp3 <- subset(data, type == "testing")

is.numeric(exp3$button_pressed)

levels(exp3$condition)
levels(exp3$phrase)
levels(exp3$group)
levels(exp3$task)

exp5 <- subset(exp3, condition != "AB" & condition != "notAB")

#exp5 <- subset(exp4, condition != "every_weird_nored" | condition != "none_weird_nored" | condition != "every_weird_red" | condition != "every_weird_nored" | condition != "some_true")

levels(exp5$condition)

exp5$quantifier <- ifelse(exp5$condition == "all_true_existential" | exp5$condition == "all_false" | exp5$condition == "all_true_universal" | exp5$condition == "all_true_no_projection", "every", "none")
                          
exp5$projection <- ifelse(exp5$condition == "all_true_existential" | exp5$condition == "none_true_existential", "existential",
                          ifelse(exp5$condition == "all_true_universal" | exp5$condition == "none_true_universal", "universal",
                                 ifelse(exp5$condition == "none_true_no_projection" | exp5$condition == "all_true_no_projection", "no projection", "false")))

exp5$quantifier <- as.factor(exp5$quantifier) 
exp5$projection <- as.factor(exp5$projection) 

levels(exp5$quantifier)
levels(exp5$projection)


expCB <- subset(exp3, task == "covered box")
                         
expCS <- subset(exp5, task == "covered speech")




results <- ddply(expCB, .(condition, group), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE) )



### plotting


plot_m2 <- ggplot(data=results, aes(x=condition, y=M, fill = group)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m2 +   labs(title="covered box",
                x="quantifier", y = "mean visible picture choices")


results2 <- ddply(expCS, .(quantifier, projection), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE) )

plot_m3 <- ggplot(data=results2, aes(x=quantifier, y=M, fill = projection)) +
  geom_bar(stat="identity", position=position_dodge())
# facet_wrap(~task)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m3 +   labs(title="covered speech",
                 x="quantifier", y = "mean visible sentence choices")





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

#hypothesis 2

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


model_2a <- glmer(button_pressed ~ negation*cond + (1+negation | subjectId), 
                  family = "binomial", 
                  data =  subset(exp, group == "no training" & critical == "critical"),
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_2a)


model_2b <- glmer(button_pressed ~ negation+cond + (1+negation| subjectId), 
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




