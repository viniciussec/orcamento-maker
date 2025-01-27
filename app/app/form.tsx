import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { router } from "expo-router";

export default function Form() {
  const [itemsQuantity, setItemsQuantity] = useState(1);

  return (
    <ScrollView
      className="bg-gray-800 w-full h-full p-6"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="text-white text-2xl font-bold">Novo Formulário</Text>
          <Text className="text-gray-200 text-lg">
            Dados da empresa/prestador
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-gray-500 p-2 rounded-md flex-row items-center gap-2"
        >
          <AntDesign name="arrowleft" size={13} color="white" />
          <Text className="text-white">Voltar</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Nome"
        placeholderTextColor="#aaa"
      />
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Responsável"
        placeholderTextColor="#aaa"
      />
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Endereço"
        placeholderTextColor="#aaa"
      />
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Telefone"
        placeholderTextColor="#aaa"
      />
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Email"
        placeholderTextColor="#aaa"
      />
      <Text className="text-gray-200 text-lg mt-4">Dados do serviço</Text>
      {Array.from({ length: itemsQuantity }).map((_, index) => (
        <TextInput
          key={index}
          className="bg-gray-700 p-4 mt-4 rounded-md"
          placeholder="Descrição do item/serviço"
          placeholderTextColor="#aaa"
        />
      ))}
      <TouchableOpacity
        onPress={() => setItemsQuantity(itemsQuantity + 1)}
        className="bg-green-800 p-4 mt-4 rounded-md flex-row items-center gap-2"
      >
        <Feather name="plus" size={13} color="white" />
        <Text className="text-white">Adicionar item/serviço</Text>
      </TouchableOpacity>
      {itemsQuantity > 1 && (
        <TouchableOpacity
          onPress={() => setItemsQuantity(itemsQuantity - 1)}
          className="bg-red-800 p-4 mt-4 rounded-md flex-row items-center gap-2"
        >
          <Feather name="minus" size={13} color="white" />
          <Text className="text-white">Remover item</Text>
        </TouchableOpacity>
      )}
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Valor final"
        placeholderTextColor="#aaa"
      />
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Forma de pagamento"
        placeholderTextColor="#aaa"
      />
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Tempo de execução"
        placeholderTextColor="#aaa"
      />

      <Text className="text-gray-200 text-lg mt-4">Dados do cliente</Text>
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Nome do cliente"
        placeholderTextColor="#aaa"
      />
      <Text className="text-gray-200 text-lg mt-4">Dados para pagamento</Text>
      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Banco"
        placeholderTextColor="#aaa"
      />

      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Agência"
        placeholderTextColor="#aaa"
      />

      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Conta"
        placeholderTextColor="#aaa"
      />

      <TextInput
        className="bg-gray-700 p-4 mt-4 rounded-md"
        placeholder="Chave PIX"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity className="bg-green-800 p-4 rounded-md flex-row items-center justify-center mt-4">
        <Text className="text-white">Salvar</Text>
      </TouchableOpacity>

      <View className="mb-10" />
    </ScrollView>
  );
}
