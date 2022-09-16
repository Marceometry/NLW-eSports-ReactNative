import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GameController } from 'phosphor-react-native'
import { THEME } from '../../theme'
import { DuoInfo } from '../DuoInfo'
import { styles } from './styles'

export interface DuoCardProps {
  id: string
  name: string
  hourEnd: string
  hourStart: string
  useVoiceChannel: boolean
  yearsPlaying: number
  weekDays: number[]
}

interface Props {
  data: DuoCardProps
  onConnect: () => void
}

export const DuoCard = ({ data, onConnect }: Props) => {
  const { hourEnd, hourStart, useVoiceChannel, yearsPlaying, weekDays } = data

  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Tempo de jogo' value={`${yearsPlaying} ano(s)`} />
      <DuoInfo
        label='Disponibilidade'
        value={`${weekDays.length} dia(s) \u2022 ${hourStart} - ${hourEnd}`}
      />
      <DuoInfo
        label='Chamada de áudio?'
        value={useVoiceChannel ? 'Sim' : 'Não'}
        valueColor={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
