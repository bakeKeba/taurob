from rest_framework import serializers
from .models import Mission, Robot

# Serializer for the Robot model
class RobotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Robot  # Specify the model to be serialized
        fields = ['id', 'name', 'model_name']  # Fields to be included in the serialized output

# Serializer for the Mission model
class MissionSerializer(serializers.ModelSerializer):
    # Use PrimaryKeyRelatedField to represent the robot as a primary key
    robot = serializers.PrimaryKeyRelatedField(queryset=Robot.objects.all())

    class Meta:
        model = Mission  # Specify the model to be serialized
        fields = ['id', 'name', 'description', 'robot']  # Fields to be included in the serialized output

    # Override the create method to handle nested relationships
    def create(self, validated_data):
        # Extract the robot from the validated data
        robot = validated_data.pop('robot')
        # Create a new Mission instance with the remaining validated data and the extracted robot
        mission = Mission.objects.create(robot=robot, **validated_data)
        return mission