import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import formatDate from "../utils/formatDate";
import { Link } from "expo-router";

export default function Index() {
  const serviceQuotes = [
    {
      clientName: "João da Silva",
      date: "2021-09-01",
    },
    {
      clientName: "Maria Oliveira",
      date: "2021-09-02",
    },
    {
      clientName: "José Pereira",
      date: "2021-09-03",
    },
  ];

  return (
    <ScrollView className="bg-gray-800 h-full p-4">
      <View className="flex justify-between flex-row items-center">
        <Text className="text-white font-bold text-2xl">
          Lista de orçamentos
        </Text>
        <Link
          href="/app/form"
          className="bg-green-700 p-2 rounded-md mt-4 flex-row items-center gap-2"
        >
          <Feather name="plus" size={13} color="white" />
          <Text className="text-white">Novo</Text>
        </Link>
      </View>
      {serviceQuotes.map((quote, index) => (
        <TouchableOpacity
          key={index}
          className="bg-gray-700 p-4 rounded-md mt-4"
        >
          <View className="flex flex-row justify-between">
            <Text className="text-white font-bold">{quote.clientName}</Text>
            <Text className="text-white">{formatDate(quote.date)}</Text>
          </View>
        </TouchableOpacity>
      ))}

      {serviceQuotes.length === 0 && (
        <View className="mt-4">
          <Text className="text-white">Nenhum orçamento cadastrado</Text>
        </View>
      )}
    </ScrollView>
  );
}
