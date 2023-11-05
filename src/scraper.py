import pandas as pd
data = pd.read_html("https://api.zippopotam.us/")[0]
data.drop(["Example URL"], axis = 1, inplace = True)
json_data = data.to_json(orient = "records")
with open("data.json", "w") as f:
    f.write(json_data)