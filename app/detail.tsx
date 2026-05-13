import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";

import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const foods = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng lezat dengan telur, ayam, dan kerupuk crispy.",
    price: 30000,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    id: 2,
    name: "Kwetiau Goreng",
    description:
      "Kwetiau goreng dengan seafood, telur, dan bumbu khas oriental.",
    price: 35000,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },
  {
    id: 3,
    name: "Seblak Pedas",
    description: "Seblak pedas khas Bandung dengan kerupuk, bakso, dan ceker.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
  },
  {
    id: 4,
    name: "Tom Yum",
    description:
      "kuah asem manis isi cabai pedas meledak dengan kuah gurih nikmat.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae",
  },
  {
    id: 5,
    name: "Mie Ayam",
    description: "Mie ayam gurih dengan topping ayam manis dan pangsit.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
  },
];

export default function HomeScreen() {
  const [selectedFood, setSelectedFood] = useState<any>(null);

  const formatRupiah = (value: number) => {
    return "Rp " + value.toLocaleString("id-ID");
  };

  const handleSelect = (item: any) => {
    setSelectedFood(item);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    Alert.alert("Logout", "Anda berhasil logout.");
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Menu Cantik</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {foods.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.card,
              selectedFood?.id === item.id && styles.selectedCard,
            ]}
            onPress={() => handleSelect(item)}
            activeOpacity={0.85}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>{formatRupiah(item.price)}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {selectedFood && (
          <View style={styles.summary}>
            <Text style={styles.summaryTitle}>Pesanan Kamu </Text>

            <Text style={styles.summaryText}>Menu: {selectedFood.name}</Text>

            <Text style={styles.summaryText}>
              Harga: {formatRupiah(selectedFood.price)}
            </Text>

            <Text style={styles.successText}>Siap diproses ✨</Text>
          </View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF4FA3",
    marginTop: 20,
    marginHorizontal: 16,
    marginBottom: 10,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF0F6",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#FFD1E8",
  },

  selectedCard: {
    borderColor: "#FF4FA3",
    backgroundColor: "#FFE3F1",
  },

  image: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 12,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF4FA3",
    marginTop: 8,
  },

  summary: {
    backgroundColor: "#FFF0F6",
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FFD1E8",
  },

  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF4FA3",
  },

  summaryText: {
    fontSize: 16,
    marginBottom: 4,
    color: "#444",
  },

  successText: {
    marginTop: 10,
    color: "#FF4FA3",
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "#FF4FA3",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 20,
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
