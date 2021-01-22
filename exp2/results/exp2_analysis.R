# This script loads the data

### LOAD PACKAGES
library(dplyr)
library(plyr)
library(ggplot2)
library(stringr)
library(lsr)
library(lme4)
#library(lmTest)
library(lmerTest)
library(simr)
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

#40


head(data)


exp2 <- subset(data, type == "testing")

is.numeric(exp2$button_pressed)

levels(exp2$condition)

exp2$negation <- ifelse(exp2$condition == "ABneg" | exp2$condition == "AnotB_greyneg" | exp2$condition
                        == "AnotB_redneg" | exp2$condition == "notABneg" | exp2$condition == "notAnotBneg", "did not wug", "wugged")

exp2$cond <- ifelse(exp2$condition == "AB" | exp2$condition == "ABneg", "AB",
                    ifelse(exp2$condition == "AnotB_grey" | exp2$condition == "AnotB_greyneg"
                           | exp2$condition == "AnotB_red" | exp2$condition == "AnotB_redneg", "AnotB",
            ifelse(exp2$condition == "notAB" | exp2$condition == "notABneg", "notAB", "notAnotB")))

results <- ddply(exp2, .(cond, group, negation), summarize, true = mean(button_pressed, na.rm =TRUE),
                 false = 1-mean(button_pressed, na.rm = TRUE))


exp2$cond2 <- ifelse(exp2$condition == "AB" | exp2$condition == "ABneg", "AB",
                    ifelse(exp2$condition == "AnotB_grey" | exp2$condition == "AnotB_greyneg", "AnotB_grey",
                           ifelse(exp2$condition == "AnotB_red" | exp2$condition == "AnotB_redneg", "AnotB_red",
                           ifelse(exp2$condition == "notAB" | exp2$condition == "notABneg", "notAB", "notAnotB"))))

                    
results2 <- ddply(exp2, .(cond2, group, negation), summarize, true = mean(button_pressed, na.rm =TRUE),
                                     false = 1-mean(button_pressed, na.rm = TRUE))


### plotting


plot <- ggplot(data=results, aes(x=cond, y=true, fill = negation)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
 #               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot +   labs(title="",
                           x="", y = "%yes-responses")


plot2 <- ggplot(data=results2, aes(x=cond2, y=true, fill = negation)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot2 +   labs(title="",
              x="", y = "%yes-responses")

