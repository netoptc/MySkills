import React, { useEffect, useState } from "react";
import moment from 'moment';

import { 
    StyleSheet, 
    View, 
    Text,
    TextInput,
    FlatList
} from "react-native";
import { SkillCard } from "../../components/SkillCard";
import { Button } from "../../components/Button";

interface ISkil {
    id: string;
    name: string;
    date: Date;
}

export function Home(): JSX.Element {

    const [skills, setSkills] = useState<ISkil[]>([]);
    const [newSkill, setNewSkill] = useState('');
    const [contSkills, setCountSkills] = useState(0);

    function handleAddNewSkill() {
        const currentDate = new Date()
        const dataSkill = {
            id: String(currentDate.getTime()),
            name: newSkill,
            date: currentDate,
        }
        setSkills(oldState => [...oldState, dataSkill]);
        setNewSkill('');
    }

    function handleRemoveSkill(id: string) {
        const filterSkills = skills.filter((skill) => skill.id !== id);
        setSkills(filterSkills);
    }
    
    useEffect(() => {
        const contSkills = skills.length;
        setCountSkills(contSkills);
    },[skills])

    return (
        <View style={styles.conatiner}>
            <Text style={styles.title}>Welcome, Neto</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNewSkill}
                value={newSkill}
            />
            <Button
                title="Add"
                onPress={handleAddNewSkill}
            />
            <View style={styles.containerSkills}>
                <Text style={styles.containerTitleSkills}>My Skills</Text>
                <View style={styles.containerCountSkills}>
                    <Text style={styles.containerTitleSkills}>{contSkills}</Text>
                </View>
            </View>
            
            <FlatList 
                data={skills}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
                    <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    /> 
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        padding: 21,
    },
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: '#ddd',
        marginBottom: 21,
    },
    input: {
        backgroundColor: '#5e5e5e',
        borderRadius: 9,
        padding: 9,
        marginBottom: 21,
    },
    containerSkills: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 21,
    },
    containerTitleSkills: {
        fontSize: 21,
        fontWeight: "700",
        color: '#ddd',
    },
    containerCountSkills: {
        backgroundColor: '#00aa00',
        padding: 5,
        borderRadius: 5,
    },
})