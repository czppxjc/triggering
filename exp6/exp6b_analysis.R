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

#100

data2 <- subset(data, trial_type == "survey-likert")


head(data)

mean_clicks <- ddply(data2, .(subjectId), summarize, 
                     M = mean(clicks, na.rm = T))

exp1 <- subset(data2, condition == "AB" | condition == "notAB")

exp1$correct <- ifelse((exp1$condition == "AB" & exp1$phrase == "wugs." & exp1$button_response == "target") | 
                         (exp1$condition == "AB" & exp1$phrase == "does not wug." & exp1$button_response == "CB") |
                         (exp1$condition == "notAB" & exp1$phrase == "does not wug." & exp1$button_response == "target") |
                         (exp1$condition == "notAB" & exp1$phrase == "wugs." & exp1$button_response == "CB"), 1, 0 )

correct_resp <- ddply(exp1, .(subjectId), summarize, 
                      M = mean(correct, na.rm = T))

unattentive = correct_resp$subjectId[which(correct_resp$M < 0.90 )]
length(unattentive)

exp2 <- subset(data, !(subjectId %in% unattentive))

exp3 <-subset(exp2, exp2$clicks != 0)

exp5 <- subset(exp3, condition != "AB" & condition != "notAB")

exp6 <- subset(exp5, condition != "every_weird_nored" & condition != "none_weird_nored" & condition != "every_weird_red" & condition != "none_weird_red")

exp7 <- subset(exp5, condition == "every_weird_nored" | condition == "none_weird_nored" | condition == "every_weird_red" | condition == "none_weird_red")


exp6$condition <- as.factor(exp6$condition)
levels(exp6$condition)

exp6$condition2 <- ifelse(exp6$condition == "none_true_universal" & exp6$id != "testing.23", "none_true_universal",
                              ifelse(exp6$condition == "none_true_universal" & exp6$id == "testing.23", "none_false",
                              ifelse(exp6$condition == "all_true_universal", "all_true_universal",
                                    ifelse(exp6$condition == "none_true_existential", "none_true_existential",
                                     ifelse(exp6$condition == "none_true_no_projection", "none_true_no_projection",
                                            ifelse(exp6$condition == "all_true_no_projection", "all_true_no_projection",
                                            ifelse(exp6$condition == "some_true", "some_true",
                                                   ifelse(exp6$condition == "some_false", "some_false",
                                                          ifelse(exp6$condition == "none_false", "none_false",
                                                                 ifelse(exp6$condition == "all_false", "all_false",
                                                                        ifelse(exp6$condition == "all_true_existential", "all_true_existential", "blubb")))))))))))
                                                   
exp6$condition2 <- as.factor(exp6$condition2)
levels(exp6$condition2)



controls <- subset(exp6, exp6$condition2 == "all_false" | exp6$condition2 == "none_false" | exp6$condition2 == "some_false" | exp6$condition2 == "some_true")

critical <- subset(exp6, exp6$condition2 != "all_false" & exp6$condition2 != "none_false" & exp6$condition2 != "some_false" & exp6$condition2 != "some_true")

levels(critical$condition2)

critical$projection <- ifelse(critical$condition2 == "none_true_existential" | critical$condition2 == "all_true_existential", "existential",
                          ifelse(critical$condition2 == "none_true_universal" | critical$condition2 == "all_true_universal", "universal","no projection")) 
                                        

critical$quantifier <- ifelse(critical$condition2 == "none_true_universal" | critical$condition2 == "none_true_existential" | critical$condition2 == "none_true_no_projection", "none", "every")



exp6$projection <- ifelse(exp6$condition2 == "none_true_existential" | exp6$condition2 == "all_true_existential", "existential",
                              ifelse(exp6$condition2 == "none_true_universal" | exp6$condition2 == "all_true_universal", "universal",
                                     ifelse(exp6$condition2 == "none_true_no_projection" | exp6$condition2 == "all_true_no_projection", "no projection",
                                     ifelse(exp6$condition2 == "some_true", "true",
                                     "false")))) 


exp6$quantifier <- ifelse(exp6$condition2 == "none_true_universal" | exp6$condition2 == "none_true_existential" | exp6$condition2 == "none_true_no_projection" | exp6$condition2 == "none_false", "none", 
                          ifelse(exp6$condition2 == "all_true_universal" | exp6$condition2 == "all_true_existential" | exp6$condition2 == "all_true_no_projection" | exp6$condition2 == "all_false", "every", "some"))




critical$responses <- as.numeric(critical$responses)

critical$trial_index <- as.numeric(critical$trial_index)

exp6$responses <- as.numeric(critical$responses)

exp6$trial_index <- as.numeric(critical$trial_index)

### separate controls/critical

results <- ddply(critical, .(quantifier, projection), summarize, CB = mean(button_response == "CB"), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

results2 <- ddply(critical, .(quantifier, projection, button_response), summarize, RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

control_results <- ddply(controls, .(condition2), summarize, CB = mean(button_response == "CB"), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

### results with controls
levels(exp6$projection)
exp6$projection = factor(exp6$projection, c("false", "no projection", 
                                            "existential", "universal",
                                            "true"))

length2 <- function (x, na.rm=FALSE) {
  if (na.rm) sum(!is.na(x))
  else       length(x)
}


CB_results <- ddply(exp6, .(quantifier, projection), summarize, 
                 CB = mean(button_response == "CB", na.rm = T)
                 , N = length2(button_response)
                 , SD = sd(button_response == "CB", na.rm=T)
                 , SE = SD/sqrt(N))

confidence_results <- ddply(exp6, .(quantifier, projection), summarize, 
                            M = mean(responses, na.rm = T)
                            , N = length2(responses)
                            , SD = sd(responses, na.rm=T)
                            , SE = SD/sqrt(N))

clicks_results <- ddply(exp6, .(quantifier, projection), summarize, 
                        M = mean(clicks, na.rm = T)
                        , N = length2(clicks)
                        , SD = sd(clicks, na.rm=T)
                        , SE = SD/sqrt(N))


### plotting


## CB rates 

plot_m1 <- ggplot(data=results, aes(x=quantifier, y=CB, fill = projection)) +
  geom_bar(stat="identity", position=position_dodge())+
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
 theme_classic(base_size = 20) 

plot_m1 +   labs(title="covered box choices",
                 x="quantifier", y = "CB choices", fill = "projection type")

plot_m6 <- ggplot(data=CB_results, aes(x=quantifier, y=CB, fill = projection)) +
  geom_bar(stat="identity", position=position_dodge())+
  #  facet_wrap(~group)
  geom_errorbar(aes(ymin=CB-SE, ymax=CB+SE), width=.2,
               position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m6 +   labs(title="covered box choices",
                 x="quantifier", y = "CB choices", fill = "projection type")




## CB rates controls

plot_m1c <- ggplot(data=control_results, aes(x=condition2, y=CB)) +
  geom_bar(stat="identity", position=position_dodge())+
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m1c +   labs(title="covered box choices",
                 x="condition", y = "CB choices")


## confidence controls


plot_m2 <- ggplot(data=control_results, aes(x=condition2, y=confidence)) +
  geom_bar(stat="identity", position=position_dodge())+
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
 theme_classic(base_size = 20) 

plot_m2 +   labs(title="confidence",
                 x="condition", y = "% confidence")

#clicks controls


plot_m2 <- ggplot(data=control_results, aes(x=condition2, y=clicks)) +
  geom_bar(stat="identity", position=position_dodge())+
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m2 +   labs(title="clicks",
                 x="condition", y = "average number of clicks")

## confidence by response

plot_m2b <- ggplot(data=results2, aes(x=projection, y=confidence, fill = button_response)) +
  coord_cartesian(ylim = c(5, 10))+
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~quantifier)+
#geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
 #              position=position_dodge(.9))+
    theme_classic(base_size = 20) 

plot_m2b +   labs(title="confidence by response",
                 x="projection", y = "confidence")


## confidence

plot_m2b <- ggplot(data=confidence_results, aes(x=projection, y=M, fill = quantifier)) +
  coord_cartesian(ylim = c(5, 10))+
  geom_bar(stat="identity", position=position_dodge())+
  geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
                position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m2b +   labs(title="confidence by quantifier and projection type",
                  x="projection", y = "confidence")






# clicks by response

plot_m2c <- ggplot(data=results2, aes(x=projection, y=clicks, fill = button_response)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~quantifier)+
#geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#              position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m2c +   labs(title="clicks by response",
                  x="projection", y = "average number of clicks")


plot_m6c <- ggplot(data=clicks_results, aes(x=projection, y=M, fill = quantifier)) +
  coord_cartesian(ylim = c(1, 1.4))+
  geom_bar(stat="identity", position=position_dodge())+
  #facet_wrap(~quantifier)+
  geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
               position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m6c +   labs(title="clicks by quantifier and projection type",
                  x="projection", y = "average number of clicks", fill = "quantifier")


## RT

plot_m4 <- ggplot(data=results, aes(x=condition2, y=RT)) +
  geom_bar(stat="identity", position=position_dodge())
#  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_m4 +   labs(title="Reaction Times",
                 x="quantifier", y = "mean RT")



exp6$button_response <- as.factor(exp6$button_response)
exp6$responses <- as.factor(exp6$responses)
exp6$clicks <- as.factor(exp6$clicks)

#### STATS


exp6$projection <- relevel(exp6$projection, ref = "universal")

## 

model_0 <- glmer(button_response ~ projection + (1 | subjectId) + (1| id), 
                 family = "binomial", 
                 data =  subset(exp6, quantifier == "every"),
                 control=glmerControl(optimizer="bobyqa",
                                      optCtrl=list(maxfun=2e5)))


summary(model_0)

# Fixed effects:
#   Estimate Std. Error z value Pr(>|z|)    
# (Intercept)               8.8114     1.1504   7.659 1.87e-14 ***
#   projectionfalse         -15.8422     1.5376 -10.304  < 2e-16 ***
#   projectionno projection  -4.1980     0.8114  -5.174 2.30e-07 ***
#   projectionexistential    -5.0767     0.8330  -6.095 1.10e-09 ***
#   ---
#   Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1

contrasts_1 <- emmeans(model_0, ~projection)
sum <- summary(contrast(contrasts_1, "tukey", simple = "each", combine = TRUE, adjust="none"))




model_1 <- glmer(button_response ~ projection + (1| subjectId) + (1 | id), 
                 family = "binomial", 
                 data =  subset(exp6, quantifier == "none"),
                 control=glmerControl(optimizer="bobyqa",
                                      optCtrl=list(maxfun=2e5)))


summary(model_1)

contrasts_2 <- emmeans(model_1, ~projection)
sum <- summary(contrast(contrasts_2, "tukey", simple = "each", combine = TRUE, adjust="none"))


### confidence

model_0a <- clmm(responses ~ projection + (1|id)+(1|subjectId), 
                 data =  subset(exp6, quantifier == "every"))

summary(model_0a)















