import json
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import MultiLabelBinarizer, LabelEncoder
import numpy as np

with open('sampleRoutines.json') as f:
    data = json.load(f)
    
hair_types = [d['hair_type'] for d in data]
scalp_types = [d['scalp_type'] for d in data]
goals = [d['goals'] for d in data]
frequency = [d['frequency'] for d in data]

hair_encoder = LabelEncoder()
scalp_encoder = LabelEncoder()
goal_encoder = MultiLabelBinarizer()

hair_encoded = hair_encoder.fit_transform(hair_types)
scalp_encoded = scalp_encoder.fit_transform(scalp_types)
goal_encoded = goal_encoder.fit_transform(goals)

X = np.column_stack((hair_encoded, scalp_encoded, goal_encoded, frequency))

print(X)

knn = NearestNeighbors(n_neighbors=2, metric="euclidean")
knn.fit(X)

user_input = {    
    'hair_type': 'curly',
    'scalp_type': 'dry',
    'goals': ['frizz control'],
    'frequency': 3
}

user_hair = hair_encoder.transform([user_input['hair_type']])
user_scalp = scalp_encoder.transform([user_input['scalp_type']])
user_goals = goal_encoder.transform([user_input['goals']])
user_freq = np.array([user_input['frequency']])

user_vector = np.concatenate((user_hair, user_scalp, user_goals.flatten(), user_freq))

metrics, routines = knn.kneighbors([user_vector])
for routine in routines[0]:
    print(data[routine])

