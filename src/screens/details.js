import { Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';

const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTransform: 'uppercase' }}>{title}</Text>
            <Text preset='h2'>{value}</Text>
        </View>
    )
}

export default function Details({ navigation, route }) {
    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const renderImage = () => {
        switch (name) {
            case 'mercury':
                return <MercurySvg />
            case 'earth':
                return <EarthSvg />
            case 'jupiter':
                return <JupiterSvg />
            case 'mars':
                return <MarsSvg />
            case 'neptune':
                return <NeptuneSvg />
            case 'saturn':
                return <SaturnSvg />
            case 'uranus':
                return <UranusSvg />
            case 'venus':
                return <VenusSvg />
        }
    }

    const onPressLink = () => {
        Linking.openURL(wikiLink)
    }

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}>{renderImage()}</View>

                <View style={styles.detailsView}>
                    <Text preset="h1" style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Pressable onPress={onPressLink} style={styles.source}>
                        <Text>Source: </Text>
                        <Text style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>

                <View style={{ height: 40 }} />

                <PlanetSection title="ROTATION TIME" value={rotationTime} />
                <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
                <PlanetSection title="RADIUS" value={radius} />
                <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    imageView: {
        marginTop: spacing[8],
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems: 'center'
    },
    name: {
        textTransform: 'uppercase',
        alignItems: 'center'
    },
    description: {
        textAlign: 'center',
        marginTop: spacing[5],
        lineHeight: 21
    },
    source: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: spacing[5],
    },
    wikipedia: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
    }
})