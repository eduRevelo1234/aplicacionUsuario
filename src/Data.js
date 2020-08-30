export const dataPoints = [];
for (let i = 0; i < 300; i++) {
  let data = {
    coordinates: [
      Math.ceil(Math.random() * 15) + 8,
      Math.ceil(Math.random() * 15) + 8,
    ],
  };
  dataPoints.push(data);
}
