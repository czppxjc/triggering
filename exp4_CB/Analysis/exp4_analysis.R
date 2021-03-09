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

#49


head(data)


exp2 <- subset(data, type == "testing")

is.numeric(exp2$button_pressed)

levels(exp2$condition)
levels(exp2$phrase)

exp2$negation <- ifelse(exp2$phrase == "does not wug.", "negation", "no negation")

#exp2$cond <- ifelse((exp2$group == "control" | exp2$group == "wug=direction" | exp2$group == "wug=red") & exp2$condition == "AB", "upward-from red", 
       #             ifelse(((exp2$group == "control" | exp2$group == "wug=direction") & exp2$condition == "notAB") | (exp2$group== "wug=red" & exp2$condition == "AnotB"), "not upward-from red", 
        #                   ifelse(((exp2$group == "control" | exp2$group == "wug=direction") & exp2$condition == "AnotB") | (exp2$group== "wug=red" & exp2$condition == "notAB"), "upward-not from red",
         #                         ifelse((exp2$group == "control" | exp2$group == "wug=direction" | exp2$group == "wug=red") & exp2$condition == "notAnotB", "not upward-not from red", "blubb"))))

exp2$type <- ifelse(exp2$condition == "AB" | exp2$condition == "AnotB"| exp2$condition == "notAnotB"
                           | exp2$condition == "notAB", "simple", "quantificational")

exp2$index <- ifelse(((exp2$condition == "AnotB" | exp2$condition == "notAnotB" | exp2$condition == "notAB") & exp2$negation == "negation" & exp2$button_pressed == 1) 
                     | (exp2$condition == "AB" & exp2$negation == "no negation" & exp2$button_pressed == 1)
| ((exp2$condition == "AnotB" | exp2$condition == "notAnotB" | exp2$condition == "notAB") & exp2$negation == "no negation" & exp2$button_pressed == 0)
| (exp2$condition == "AB" & exp2$negation == "negation" & exp2$button_pressed == 0), 1, 0)

exp2$index2 <- ifelse(((exp2$cond == "upward-from red" & exp2$button_pressed == 1) | (exp2$cond == "not upward-from red" & exp2$button_pressed == 0)
| (exp2$cond == "upward-not from red" & exp2$button_pressed == 0) | (exp2$cond == "not upward-not from red" & exp2$button_pressed == 0) & exp2$negation == "no negation") |
  ((exp2$cond == "upward-from red" & exp2$button_pressed == 0) | (exp2$cond == "not upward-from red" & exp2$button_pressed == 1)
   | (exp2$cond == "upward-not from red" & exp2$button_pressed == 1) | (exp2$cond == "not upward-not from red" & exp2$button_pressed == 1) & exp2$negation == "negation"), 1, 0)



is.numeric(exp2$index2)

exp_qua <- subset(exp2, type == "quantificational")
exp <- subset(exp2, type == "simple")



results1 <- ddply(exp, .(condition, group, negation), summarize, M = mean(index, na.rm =TRUE))
results1b <- ddply(exp, .(condition, group, negation), summarize, M = mean(button_pressed, na.rm =TRUE))
results1c <- ddply(exp, .(cond, group, negation), summarize, M = mean(button_pressed == 1, na.rm =TRUE))

controls <- subset(exp, group == "control")
                    
results2 <- ddply(exp_qua, .(condition, group, negation), summarize, M = mean(button_pressed, na.rm =TRUE))


### plotting


plot <- ggplot(data=results1, aes(x=condition, y=M, fill = negation)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~group)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
 #               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot +   labs(title="",
                           x="", y = "PSP index")

plot <- ggplot(data=results1c, aes(x=group, y=M, fill = negation)) +
  geom_bar(stat="identity", position="stack")+
  facet_wrap(~cond)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot +   labs(title="",
              x="", y = "yes-responses")


plot2 <- ggplot(data=results2, aes(x=condition, y=M, fill=group)) +
  geom_bar(stat="identity", position=position_dodge())
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot2 +   labs(title="",
              x="", y = "PSP index")




exp %>% ddply(.(condition, group, negation, subjectId), 
		summarize, 
               m = mean(button_pressed)
		) %>%
	ddply(.(condition, group, negation), 
		summarize, 
		       n    = length(!is.na(m)),
               m = mean(m, na.rm=TRUE),
               sd   = sd(m, na.rm=TRUE),
               se   = sd / sqrt(n)
		) %>%
	ggplot(data=., aes(x=group, y=m, fill=negation)) +
		geom_bar(stat="identity", position="stack") +
		facet_grid(~condition) +   
		labs(title="", x="", y = "1=bivalence, less=pres gap")



exp_qua %>%
	separate(condition, into=c("quantifier", "t_condition"), sep="_", fill="right", extra="merge")	 %>%
	ddply(.(quantifier, group, t_condition, subjectId), summarize, M = mean(button_pressed, na.rm =TRUE)) %>%
	ddply(.(quantifier, group, t_condition), summarize, 
		n    = length(!is.na(M)),
		m = mean(M, na.rm=TRUE),
        sd   = sd(M, na.rm=TRUE),
        se   = sd / sqrt(n)
		) %>%
	ggplot(data=., aes(x=group, y=m)) +
		geom_bar(stat="identity", position=position_dodge()) +
		geom_errorbar(aes(ymin=m-se, ymax=m+se), width=.2,
			position=position_dodge(.9))+
		facet_grid(quantifier~t_condition) +
		labs(title="", x="", y = "")
