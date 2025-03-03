import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: theme.spacing.medium,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: theme.spacing.small,
  },
  languageText: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: theme.spacing.medium,
  },
  statItem: {
    alignItems: "center",
  },
  boldText: {
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
  },
  descriptionText: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textSecondary,
  },
});

const formatNumber = (num) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image
          source={{ uri: repository.ownerAvatarUrl }}
          style={styles.avatar}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.boldText}>{repository.fullName}</Text>
          <Text style={styles.descriptionText}>{repository.description}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText}>{repository.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.boldText}>
            {formatNumber(repository.stargazersCount)}
          </Text>
          <Text style={styles.descriptionText}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.boldText}>
            {formatNumber(repository.forksCount)}
          </Text>
          <Text style={styles.descriptionText}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.boldText}>
            {formatNumber(repository.reviewCount)}
          </Text>
          <Text style={styles.descriptionText}>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.boldText}>{repository.ratingAverage}</Text>
          <Text style={styles.descriptionText}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
