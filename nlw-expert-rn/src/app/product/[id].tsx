import { Image, View, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router"
import { Redirect } from "expo-router"
import { Feather } from "@expo/vector-icons"

import { useCartStore } from "@/stores/cart-store";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Product() {
    const cartStore = useCartStore()
    const navigation = useNavigation()

    const { id } = useLocalSearchParams()
    const product = PRODUCTS.find((item) => item.id === id)

    function handleAddToCart() {
        if (product) {
            cartStore.add(product)
            navigation.goBack()
        }
    }

    if (!product) {
        return <Redirect href="/" />
    }

    return (
        <View className="flex-1">
            <Image
                source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
            />
            <View className="p-5 mt-3 flex-1">
                <View className=" bg-slate-800 rounded-2xl mb-3 p-2 flex flex-row justify-between">
                    <Text className="text-white text-xl font-heading mx-0.5 text-center">
                        {product.title}
                    </Text>
                    <Text className="text-lime-400 text-xl font-heading mx-0.5 text-center">
                        {formatCurrency(product.price)}
                    </Text>
                </View>

                <Text className="text-slate-400 text-base font-body leading-6 mb-4 mx-1">
                    {product.description}
                </Text>

                {product.ingredients.map((ingredient) => (
                    <Text key={ingredient} className="text-slate-400 text-sm font-body leading-6 mx-1.5">
                        • {ingredient}
                    </Text>
                ))}
            </View>
            <View className="p-5 pb-8 gap-5">
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text>
                        add to cart
                    </Button.Text>
                </Button>
                <LinkButton title="Voltar ao Cardápio" href="/" />
            </View>
        </View>
    )
}