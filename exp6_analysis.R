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

#19

data2 <- subset(data, trial_type == "survey-likert")


head(data)





exp5 <- subset(data2, condition != "AB" & condition != "notAB")

exp6 <- subset(exp5, condition != "every_weird_nored" & condition != "none_weird_nored" & condition != "every_weird_red" & condition != "none_weird_red")

exp7 <- subset(exp5, condition == "every_weird_nored" | condition == "none_weird_nored" | condition == "every_weird_red" | condition == "none_weird_nored")



                         
exp6$condition2 <- ifelse(exp6$condition == "all_true_existential" | exp6$condition == "none_true_existential", "existential",
                          ifelse(exp6$condition == "all_true_universal" | exp6$condition == "none_true_universal", "universal",
                                 ifelse(exp6$condition == "none_true_no_projection" | exp6$condition == "all_true_no_projection", "no projection", 
                                        ifelse(exp6$condition == "some_true", "some", "false"))))


exp6$responses <- as.numeric(exp6$responses)

exp6$trial_index <- as.numeric(exp6$trial_index)

exp6_CB <- subset(exp6, button_response == "CB")
exp6_target <- subset(exp6, button_response == "target")
exp6_first_trials <- subset(exp6, trial_index < 23)

results <- ddply(exp6, .(condition2), summarize, M = mean(button_response=="CB", na.rm =TRUE), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

results2 <- ddply(exp6, .(condition), summarize, M = mean(button_response=="CB", na.rm =TRUE), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))


results2d <- ddply(exp6, .(condition, button_response), summarize, M = mean(button_response=="CB", na.rm =TRUE), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

results2a <- ddply(exp6_CB, .(condition), summarize, clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

results2c <- ddply(exp6_target, .(condition), summarize, clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))



results2b <- ddply(exp6_first_trials, .(condition), summarize, M = mean(button_response=="CB", na.rm =TRUE), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))



### plotting

# confidence by response

plot_m1 <- ggplot(data=results2d, aes(x=condition, y=confidence, fill = button_response)) +
  geom_bar(stat="identity", position=position_dodge())
# facet_wrap(~button_response)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m1 +   labs(title="confidence by response",
                 x="quantifier", y = "confidence")


## CB rates 

plot_m1 <- ggplot(data=results2, aes(x=condition, y=M)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m1 +   labs(title="covered box",
                 x="quantifier", y = "CB choices")

## CB rates first trials

plot_m1a <- ggplot(data=results2b, aes(x=condition, y=M)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m1a +   labs(title="covered box",
                 x="quantifier", y = "CB choices")




# clicks

plot_m3 <- ggplot(data=results2, aes(x=condition, y=clicks)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m3 +   labs(title="clicks",
                 x="quantifier", y = "clicks on animation button")


#clicks CB choices

plot_m3a <- ggplot(data=results2a, aes(x=condition, y=clicks)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m3a +   labs(title="clicks",
                 x="quantifier", y = "clicks on animation button")



### confidence


plot_m4 <- ggplot(data=results2, aes(x=condition, y=confidence)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m4 +   labs(title="confidence",
                 x="quantifier", y = "average confidence")


### confidence CB choices


plot_m4a <- ggplot(data=results2a, aes(x=condition, y=confidence)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m4a +   labs(title="confidence",
                 x="quantifier", y = "average confidence")


plot_m4b <- ggplot(data=results2c, aes(x=condition, y=confidence)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m4b +   labs(title="confidence",
                  x="quantifier", y = "average confidence")










## RT

plot_m4 <- ggplot(data=results, aes(x=condition2, y=RT)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m4 +   labs(title="Reaction Times",
                 x="quantifier", y = "mean RT")








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




