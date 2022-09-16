import { LinearGradient } from 'expo-linear-gradient'
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

export interface GameCardProps {
  id: string
  title: string
  bannerUrl: string
  _count: { ads: number }
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export const GameCard = ({ data, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
