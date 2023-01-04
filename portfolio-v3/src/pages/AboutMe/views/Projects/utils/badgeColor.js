export const badgeColor = (badge) => {
  switch (badge) {
    case "React":
      return "badge-info";
    case "React Native":
      return "badge-info";
    case "JavaScript":
      return "badge-warning";
    case "Node.js":
      return "badge-success";
    case "Python":
      return "badge-warning";
    case "MongoDB":
      return "badge-success";
    case "SQL":
      return "badge-error";
    case "Firebase":
      return "badge-error";
    default:
      return "badge-secondary";
  }
};
