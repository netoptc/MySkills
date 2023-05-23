import React from "react"
import { 
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native"

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
  }

export function SkillCard({ skill, ...rest }: SkillCardProps): JSX.Element  {
    return(
        <TouchableOpacity style={styles.skillCardContainer} {...rest}>
            <Text 
                key={skill}
                style={styles.skillCardTitle}
            >
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skillCardContainer: {
        backgroundColor: '#9e9e9e',
        alignItems: "center",
        paddingVertical: 18,
        borderRadius: 6,
        marginVertical: 6
    },
    skillCardTitle: {
        fontSize: 18
    }
})