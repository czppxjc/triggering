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

length(unique(exp3$subjectId))

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

exp7$responses <- as.numeric(exp7$responses)

exp7$trial_index <- as.numeric(exp7$trial_index)

### separate controls/critical

results <- ddply(critical, .(quantifier, projection), summarize, CB = mean(button_response == "CB"), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

results2 <- ddply(critical, .(quantifier, projection, button_response), summarize, RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

control_results <- ddply(controls, .(condition2), summarize, CB = mean(button_response == "CB"), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))

weird_results <- ddply(exp7, .(condition), summarize, CB = mean(button_response == "CB"), RT = mean(rt, na.rm =TRUE), clicks = mean(clicks, , na.rm =TRUE),  confidence = mean(responses, na.rm =TRUE))


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

is.numeric(exp6$responses)

exp6$responses <- as.numeric(exp6$responses)

confidence_results <- ddply(exp6, .(quantifier, projection, button_response), summarize, 
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


plot_m6d <- ggplot(data=weird_results, aes(x=condition, y=CB)) +
  geom_bar(stat="identity", position=position_dodge())+
  #  facet_wrap(~group)
#  geom_errorbar(aes(ymin=CB-SE, ymax=CB+SE), width=.2,
  #              position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot_m6d +   labs(title="covered box choices",
                 x="condition", y = "CB choices")




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


## confidence response target

plot_m2b <- ggplot(data=subset(confidence_results, button_response == "target" & projection != "false"), aes(x=projection, y=M, fill = quantifier)) +
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
exp6$clicks <- as.numeric(exp6$clicks)

#### STATS


exp6$projection <- relevel(exp6$projection, ref = "universal")

### interaction 

model_ia <- glmer(button_response ~ projection*quantifier + (1 | subjectId) + (1| id), 
                 family = "binomial", 
                 data =  exp6,
                 control=glmerControl(optimizer="bobyqa",
                                      optCtrl=list(maxfun=2e5)))


summary(model_ia)

model_ib <- glmer(button_response ~ projection+quantifier + (1 | subjectId) + (1| id), 
                  family = "binomial", 
                  data =  exp6,
                  control=glmerControl(optimizer="bobyqa",
                                       optCtrl=list(maxfun=2e5)))


summary(model_ib)

anova(model_ia, model_ib)


contrasts_ia <- emmeans(model_ia, ~projection*quantifier)
summary(contrast(contrasts_ia, "tukey", simple = "each", combine = TRUE, adjust="none"))


##  every

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


# universal - false             15.842 1.538 Inf  10.304  <.0001
# universal - no projection      4.198 0.811 Inf   5.174  <.0001
# universal - existential        5.077 0.833 Inf   6.095  <.0001
# false - no projection        -11.644 1.262 Inf  -9.225  <.0001
# false - existential          -10.766 1.218 Inf  -8.835  <.0001
# no projection - existential    0.879 0.491 Inf   1.791  0.0733
# 


model_1 <- glmer(button_response ~ projection + (1| subjectId) + (1 | id), 
                 family = "binomial", 
                 data =  subset(exp6, quantifier == "none"),
                 control=glmerControl(optimizer="bobyqa",
                                      optCtrl=list(maxfun=2e5)))


summary(model_1)

# Fixed effects:
#   Estimate Std. Error z value Pr(>|z|)    
# (Intercept)               5.2610     0.5814   9.050  < 2e-16 ***
#   projectionfalse         -12.0421     1.1929 -10.095  < 2e-16 ***
#   projectionno projection  -2.6194     0.4754  -5.510 3.59e-08 ***
#   projectionexistential    -1.8918     0.4767  -3.969 7.22e-05 ***

contrasts_2 <- emmeans(model_1, ~projection)
sum <- summary(contrast(contrasts_2, "tukey", simple = "each", combine = TRUE, adjust="none"))


# universal - false             12.042 1.193 Inf  10.095  <.0001
# universal - no projection      2.619 0.475 Inf   5.510  <.0001
# universal - existential        1.892 0.477 Inf   3.969  0.0001
# false - no projection         -9.423 1.076 Inf  -8.761  <.0001
# false - existential          -10.150 1.099 Inf  -9.237  <.0001
# no projection - existential   -0.728 0.276 Inf  -2.636  0.0084

### confidence

model_0a <- clmm(responses ~ projection + (1|id)+(1|subjectId), 
                 data =  subset(exp6, quantifier == "every"))

summary(model_0a)

# Coefficients:
#   Estimate Std. Error z value Pr(>|z|)    
# projectionfalse          -1.7114     0.3307  -5.175 2.28e-07 ***
#   projectionno projection  -2.5677     0.3088  -8.314  < 2e-16 ***
#   projectionexistential    -3.0388     0.3104  -9.789  < 2e-16 ***

contrasts_3 <- emmeans(model_0a, ~projection)
summary(contrast(contrasts_3, "tukey", simple = "each", combine = TRUE, adjust="none"))


# contrast                    estimate    SE  df z.ratio p.value
# universal - false              1.711 0.331 Inf   5.175  <.0001
# universal - no projection      2.568 0.309 Inf   8.314  <.0001
# universal - existential        3.039 0.310 Inf   9.789  <.0001
# false - no projection          0.856 0.319 Inf   2.686  0.0072
# false - existential            1.327 0.319 Inf   4.162  <.0001
# no projection - existential    0.471 0.289 Inf   1.632  0.1027


model_1b <- clmm(responses ~ projection + (1|id)+(1|subjectId), 
                 data =  subset(exp6, quantifier == "none"))

summary(model_1b)

contrasts_4 <- emmeans(model_1b, ~projection)
summary(contrast(contrasts_4, "tukey", simple = "each", combine = TRUE, adjust="none"))


# Coefficients:
#   Estimate Std. Error z value Pr(>|z|)    
# projectionfalse          -1.8127     0.2256  -8.036  9.3e-16 ***
#   projectionno projection  -2.8147     0.2286 -12.313  < 2e-16 ***
#   projectionexistential    -2.4475     0.2265 -10.807  < 2e-16 ***

##clicks


model_0c <- lmer(clicks ~ projection + (1|id)+(1|subjectId), 
                 data =  subset(exp6, quantifier == "every"))

summary(model_0c)

contrasts_5 <- emmeans(model_0c, ~projection)
summary(contrast(contrasts_5, "tukey", simple = "each", combine = TRUE, adjust="none"))


# 
# Fixed effects:
#   Estimate Std. Error       df t value Pr(>|t|)    
# (Intercept)              1.12059    0.03203 35.03294  34.986   <2e-16 ***
#   projectionfalse         -0.02647    0.03519 10.99997  -0.752   0.4678    
# projectionno projection  0.06176    0.03258 10.99997   1.896   0.0846 .  
# projectionexistential    0.08529    0.03258 10.99997   2.618   0.0239 * 
# 

# contrast                    estimate     SE df t.ratio p.value
# universal - false             0.0265 0.0352 11   0.752  0.4678
# universal - no projection    -0.0618 0.0326 11  -1.896  0.0846
# universal - existential      -0.0853 0.0326 11  -2.618  0.0239
# false - no projection        -0.0882 0.0352 11  -2.507  0.0291
# false - existential          -0.1118 0.0352 11  -3.176  0.0088
# no projection - existential  -0.0235 0.0326 11  -0.722  0.4853


model_1c <- lmer(clicks ~ projection + (1|id)+(1|subjectId), 
                 data =  subset(exp6, quantifier == "none"))

summary(model_1c)

# Fixed effects:
#   Estimate Std. Error       df t value Pr(>|t|)    
# (Intercept)              1.20392    0.04055 26.85753  29.688   <2e-16 ***
#   projectionfalse         -0.05686    0.04201 11.00534  -1.354   0.2030    
# projectionno projection  0.06667    0.04201 11.00534   1.587   0.1408    
# projectionexistential    0.09314    0.04201 11.00534   2.217   0.0486 *  

contrasts_6 <- emmeans(model_1c, ~projection)
summary(contrast(contrasts_6, "tukey", simple = "each", combine = TRUE, adjust="none"))

# contrast                    estimate     SE df t.ratio p.value
# universal - false             0.0569 0.0420 11   1.354  0.2030
# universal - no projection    -0.0667 0.0420 11  -1.587  0.1408
# universal - existential      -0.0931 0.0420 11  -2.217  0.0486
# false - no projection        -0.1235 0.0389 11  -3.176  0.0088
# false - existential          -0.1500 0.0389 11  -3.857  0.0027
# no projection - existential  -0.0265 0.0389 11  -0.681  0.5102



