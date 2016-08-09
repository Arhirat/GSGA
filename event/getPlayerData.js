require("Model")

var record = load();

if(record.playerData == null)
{
    record.playerData = getDefaultPlayerData();
    save(record);
}

Spark.setScriptData("playerData", record.playerData);