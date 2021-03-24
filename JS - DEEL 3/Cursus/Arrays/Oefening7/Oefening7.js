let hondenrassen = new Array(10);

hondenrassen[0] = "Labrador";
hondenrassen[1] = "Duitse Herdershond";
hondenrassen[2] = "Golden Retriever";
hondenrassen[3] = "Sennenhond";
hondenrassen[4] = "Bull";
hondenrassen[5] = "Chihuahua";
hondenrassen[6] = "Boxer";
hondenrassen[7] = "Franse Bulldog";
hondenrassen[8] = "Engelse Bulldog";
hondenrassen[9] = "Spaniel";

hondenrassen.splice(2, 0, "Random Hond 1", "Random Hond 2");

for (let i = 0; i < hondenrassen.length; i++) {
    console.log((i+ 1) + ": " + hondenrassen[i])
}