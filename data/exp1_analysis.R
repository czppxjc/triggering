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

#25


head(data)


exp1 <- subset(data, type == "testing")


exp1$response <- ifelse(exp1$button_pressed == 0, "false", 
                        ifelse(exp1$button_pressed == 1, "neither", "true"))

exp1$response <- as.factor(exp1$response)

result <- ddply(exp1, .(condition), summarize, neither =mean(response == "neither", na.rm =TRUE), 
                false = mean(response == "false", na.rm =TRUE), true = mean(response == "true", na.rm =TRUE))


result_part <- ddply(subset(exp1, condition == "AB"), .(subjectId), summarize, true = mean(response== "true", na.rm =TRUE))



# x freq
# 1 FALSE   11
# 2  TRUE   14

# condition    neither     false      true
# 1         AB 0.06666667 0.0000000 0.9333333
# 2 AnotB_grey 0.25333333 0.2933333 0.4533333
# 3  AnotB_red 0.22666667 0.2000000 0.5733333
# 4      notAB 0.25333333 0.5733333 0.1733333
# 5   notAnotB 0.16000000 0.6400000 0.2000000

condition <- c('AB','AB','AB', 'AnotBgrey', 'AnotBgrey', 'AnotBgrey', 'AnotBred', 'AnotBred', 'AnotBred', 'notAB', 'notAB', 'notAB', 'notAnotB', 'notAnotB', 'notAnotB')
resp <- c('neither', 'true', 'false', 'neither', 'true', 'false', 'neither', 'true', 'false', 'neither', 'true', 'false','neither', 'true', 'false')
perc <- c(0.07, 0.93, 0, 0.25, 0.45, 0.3, 0.23, 0.57, 0.2, 0.25, 0.18, 0.57, 0.16, 0.2, 0.64)

employ.data <- data.frame(condition, resp, perc)


### plotting


plot <- ggplot(data=employ.data, aes(x=condition, y= perc ,fill=resp)) +
  geom_bar(stat="identity")

### looking at participants who used neither

idiots = result_part$subjectId[which(result_part$true != 1)]

is.numeric(result_part$PSP)

exp2 <- subset(exp1, !(subjectId %in% idiots))

length(unique(exp2$subjectId))
#21

result2 <- ddply(exp2, .(condition), summarize, neither =mean(response == "neither", na.rm =TRUE), 
              true = mean(response == "true", na.rm =TRUE), false = mean(response == "false", na.rm =TRUE))

condition2 <- c('AB','AB','AB', 'AnotBgrey', 'AnotBgrey', 'AnotBgrey', 'AnotBred', 'AnotBred', 'AnotBred', 'notAB', 'notAB', 'notAB', 'notAnotB', 'notAnotB', 'notAnotB')
resp2 <- c('neither', 'true', 'false', 'neither', 'true', 'false', 'neither', 'true', 'false', 'neither', 'true', 'false','neither', 'true', 'false')
perc2 <- c(0, 1, 0, 0.20, 0.48, 0.32, 0.175, 0.60, 0.225, 0.25, 0.10, 0.65, 0.11, 0.2, 0.70)



employ.data2 <- data.frame(condition2, resp2, perc2)



plot2 <- ggplot(data=employ.data2, aes(x=condition2, y= perc2 ,fill=resp2)) +
  geom_bar(stat="identity")
plot2

report <- subset(data, questionId == "self_report")

report$responses <- as.factor(report$responses)

levels(report$responses)


# condition   neither      true     false
# 1         AB 0.0000000 1.0000000 0.0000000
# 2 AnotB_grey 0.2063492 0.4761905 0.3174603
# 3  AnotB_red 0.1746032 0.6031746 0.2222222
# 4      notAB 0.2539683 0.0952381 0.6507937
# 5   notAnotB 0.1111111 0.1904762 0.6984127


result3 <- ddply(exp2, .(subjectId, condition), summarize, PSP =mean(response == "neither", na.rm =TRUE))


s <- ggplot(data=result3, aes(x=condition, y=PSP)) +
  geom_bar(stat="identity", position=position_dodge())
s+facet_wrap(~subjectId)


