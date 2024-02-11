import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
import colors from "tailwindcss/colors"

type HeaderProps = {
    title: string
    cartQuantityItems?: number
}

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 py-4 mx-5">
            <View className="flex-1">
                <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
                <Text className="text-slate-200 text-xl font-heading mt-2">{title}</Text>
            </View>
            {/* codigo abaixo executa se a condição for atendida (cartQuantityItems > 0)*/}
            {
                cartQuantityItems > 0 &&
                <TouchableOpacity className="relative" activeOpacity={0.5} >
                    <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2.5 z-10 -right-3.5">
                        <Text className="text-slate-900 font-bold text-xs"> {cartQuantityItems} </Text>
                    </View>

                    <Feather name="shopping-bag" color={colors.white} size={24} />
                </TouchableOpacity>
                }
        </View>
    )
}