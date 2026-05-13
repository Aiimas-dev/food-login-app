import { useRouter } from "expo-router";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 20,
      }}
    >
      {/* ICON MAKANAN */}
      <Text style={{ fontSize: 60, marginBottom: 10 }}>🍜🍟🍔</Text>
      {/* TITLE */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#FF4FA3",
          marginBottom: 15,
        }}
      ></Text>

      {/* GAMBAR DI ATAS EMAIL */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1604908177522-0403f3a6f5d6",
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
          marginBottom: 20,
        }}
      />

      {/* EMAIL INPUT */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={{
          width: "100%",
          backgroundColor: "#FFF0F6",
          borderWidth: 1,
          borderColor: "#FFD1E8",
          padding: 12,
          borderRadius: 12,
          marginBottom: 10,
        }}
      />

      {/* PASSWORD INPUT */}
      <TextInput
        placeholder="Sandi"
        placeholderTextColor="#999"
        secureTextEntry
        style={{
          width: "100%",
          backgroundColor: "#FFF0F6",
          borderWidth: 1,
          borderColor: "#FFD1E8",
          padding: 12,
          borderRadius: 12,
          marginBottom: 20,
        }}
      />

      {/* BUTTON LOGIN (TIDAK DIUBAH LOGIC) */}
      <Pressable
        onPress={() => router.replace("/detail")}
        style={{
          backgroundColor: "#FF4FA3",
          padding: 16,
          width: "100%",
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
      </Pressable>
    </View>
  );
}
