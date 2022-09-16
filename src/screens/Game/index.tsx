import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameRouteParams } from '../../@types/navigation'
import { Background, DuoCard, DuoCardProps, Heading } from '../../components'
import { THEME } from '../../theme'
import { styles } from './styles'

export const Game = () => {
  const [duoList, setDuoList] = useState<DuoCardProps[]>([])
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameRouteParams

  const handleGoBack = () => navigation.goBack()

  const onConnect = () => console.log('connect')

  useEffect(() => {
    fetch(`http://192.168.43.205:3333/games/${game.id}/ads`)
      .then((res) => res.json())
      .then(setDuoList)
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />

        <Heading title={game.title} subtitle='Conecte-se e comece a jogar!' />

        <FlatList
          data={duoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={onConnect} />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
          style={styles.containerList}
          contentContainerStyle={
            duoList.length > 0 ? styles.contentList : styles.emptyListContent
          }
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </SafeAreaView>
    </Background>
  )
}
