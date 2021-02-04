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

#92


head(data)


exp2 <- subset(data, type == "testing")

is.numeric(exp2$button_pressed)

levels(exp2$condition)
levels(exp2$phrase)

exp2$negation <- ifelse(exp2$phrase == "does not move from red upward." | exp2$phrase == "does not wug.", "negation", "no negation")

exp2$type <- ifelse(exp2$condition == "AB" | exp2$condition == "AnotB"| exp2$condition == "notAnotB"
                           | exp2$condition == "notAB", "simple", "quantificational")

exp2$index <- ifelse(((exp2$condition == "AnotB" | exp2$condition == "notAnotB" | exp2$condition == "notAB") & exp2$negation == "negation" & exp2$button_pressed == 1) 
                     | (exp2$condition == "AB" & exp2$negation == "no negation" & exp2$button_pressed == 1)
| ((exp2$condition == "AnotB" | exp2$condition == "notAnotB" | exp2$condition == "notAB") & exp2$negation == "no negation" & exp2$button_pressed == 0)
| (exp2$condition == "AB" & exp2$negation == "negation" & exp2$button_pressed == 0), 1, 0)

is.numeric(exp2$index)

exp_qua <- subset(exp2, type == "quantificational")
exp <- subset(exp2, type == "simple")

results1 <- ddply(exp, .(condition, group, negation), summarize, M = mean(index, na.rm =TRUE))
results1b <- ddply(exp, .(condition, group, negation), summarize, M = mean(button_pressed, na.rm =TRUE))

controls <- subset(exp, group == "control")
                    
results2 <- ddply(exp_qua, .(condition, group), summarize, M = mean(button_pressed, na.rm =TRUE))


### plotting


plot <- ggplot(data=results1, aes(x=condition, y=M)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
 #               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot +   labs(title="",
                           x="", y = "PSP index")


plot2 <- ggplot(data=results2, aes(x=condition, y=M, fill=group)) +
  geom_bar(stat="identity", position=position_dodge())
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot2 +   labs(title="",
              x="", y = "PSP index")

