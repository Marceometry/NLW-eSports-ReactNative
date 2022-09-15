import { View, ActivityIndicator } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} size={48} />
    </View>
  )
}