import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Background, GameCard, GameCardProps, Heading } from '../../components'
import { styles } from './styles'

export const Home = () => {
  const [gameList, setGameList] = useState<GameCardProps[]>([])
  const navigation = useNavigation()

  const handleOpenGame = (game: GameCardProps) => {
    navigation.navigate('game', {
      bannerUrl: game.bannerUrl,
      title: game.title,
      id: game.id,
    })
  }

  useEffect(() => {
    fetch('http://192.168.43.205:3333/games')
      .then((res) => res.json())
      .then(setGameList)
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />

        <FlatList
          data={gameList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </SafeAreaView>
    </Background>
  )
}
