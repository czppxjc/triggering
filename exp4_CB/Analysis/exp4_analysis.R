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

#155


head(data)


exp2 <- subset(data, type == "testing")

is.numeric(exp2$button_pressed)

levels(exp2$condition)
levels(exp2$phrase)
levels(exp2$group)

exp2$negation <- ifelse((exp2$phrase == "does not wug." | exp2$phrase == "does not move from red upward.") , "negative", "positive")

exp2$cond <- ifelse(exp2$condition == "AB", "upward-from red", 
                  ifelse(exp2$condition == "notAB", "not upward-from red", 
                          ifelse(exp2$condition == "AnotB", "upward-not from red",
                              ifelse(exp2$condition == "notAnotB", "not upward-not from red", "blubb"))))

exp2$type <- ifelse(exp2$condition == "AB" | exp2$condition == "AnotB" | exp2$condition == "notAnotB" | exp2$condition == "notAB", "simple", "quantificational")



is.numeric(exp2$CB)

exp3 <- subset(exp2, rt< 9000 & rt> 500)

boxplot(exp3$rt)

exp_qua <- subset(exp3, type == "quantificational")
exp <- subset(exp3, type == "simple")



results <- ddply(exp, .(cond, negation, group), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE) )

results_qua <- ddply(exp_qua, .(condition, group), summarize, M = mean(button_pressed==0, na.rm =TRUE), RT = mean(rt, na.rm =TRUE))

results_pred = read.csv(file=file.choose(),sep = ';',header = T,na.strings=c("","NA"))

### plotting
##write.table(results, file = "results.txt", sep = ",", quote = FALSE, row.names = F)

plot <- ggplot(data=subset(results_pred, group == "control")) +
  geom_bar(aes(x=exp, y=M, fill = negation), stat="identity", position="dodge", width = 0.8, color = "black")+
facet_wrap(~cond)+
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
 #               position=position_dodge(.9))+
  theme_classic(base_size = 20) 

plot +   labs(title="training: no training - controls",
                           x="", y = "rate of visible picture choices")

plot_rt <- ggplot(data=results, aes(x=group, y=RT, fill = negation)) +
  geom_bar(stat="identity", position=position_dodge())+
  facet_wrap(~cond)
#+geom_errorbar(aes(ymin=M-SE, ymax=M+SE), width=.2,
#               position=position_dodge(.9))+
#  theme_classic(base_size = 20) 

plot_rt +   labs(title="",
              x="", y = "RTs")




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







exp %>% ddply(.(cond, negation, subjectId), 
		summarize, 
               m = mean(button_pressed)
		) %>%
	ddply(.(cond, negation), 
		summarize, 
		       n    = length(!is.na(m)),
               m = mean(m, na.rm=TRUE),
               sd   = sd(m, na.rm=TRUE),
               se   = sd / sqrt(n)
		) %>%
	ggplot(data=., aes(x=cond, y=m, fill=negation)) +
		geom_bar(stat="identity", position="stack") +
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
