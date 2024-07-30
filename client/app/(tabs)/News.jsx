import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import fetchNews from "../../lib/fetchNews";
import { Link } from "expo-router";
import NoImage from "../../assets/images/svg/OIP-removebg-preview.png";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const fetchedArticles = await fetchNews();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  // Function to format the published date
  const formatPublishedAt = (publishedAt) => {
    if (!publishedAt) return "Date not available";

    const date = new Date(publishedAt);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText} className="font-bold">Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <View style={styles.articleContainer} >
              <Image
                className="w-full"
                resizeMode="contain"
                source={item.urlToImage ? { uri: item.urlToImage } : NoImage}
                style={{ height: 250 }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Link href={item.url} style={styles.link}>
                Read More
              </Link>
              <Text style={styles.publishedAt}>
                {formatPublishedAt(item.publishedAt)}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
  },
  articleContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {},
  link: {
    color: "blue",
    marginTop: 8,
    textDecorationLine: "underline",
  },
  publishedAt: {
    color: "#888",
    marginTop: 8,
  },
});

export default News;
