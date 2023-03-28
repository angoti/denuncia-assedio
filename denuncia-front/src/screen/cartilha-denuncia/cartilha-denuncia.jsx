import { Text, View } from "react-native";
import Style from './style'

export default function () {
  return (
    <View>
      <View style={Style.header}>
        <Text>CARTILHA DE DENÚNCIA</Text>
      </View>
      <View>
        <Text style={Style.mb15}>Olá!</Text>
        <Text style={Style.mb15}>
          Convidamos você a conhecer como funciona o cadastro e acompanhamento
          de denúncia no __________
        </Text>
        <Text style={Style.mb15}> 
          A seguir serão solicitadas informações acerca de denúncia que precisa
          ser registrada.
        </Text>
        <Text style={Style.mb15}>INFORMAÇÕES IMPORTANTES</Text>
        <Text style={Style.mb5}> - A denunciante é quem decide se irá seguir de forma anônima ou não</Text>
        <Text style={Style.mb5}> - Você consegue verificar o Status da sua denúncia</Text>
        <Text style={Style.mb5}> - Ao final do registro de denúncia, pode haver um chat para recolhimento
            de mais informações. Mesmo com o cadastro anônimo, você conseguirá responder o chat
        </Text>
      </View>
    </View>
  );
}
