export const formatToJson = <T>(data: { toJson: () => T }[]) => {
  return data.map((element) => element.toJson());
};
