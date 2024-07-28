from rest_framework import viewsets
from .models import Mission, Robot
from .serializers import MissionSerializer, RobotSerializer

# ViewSet for handling Mission model CRUD operations
class MissionViewSet(viewsets.ModelViewSet):
    # Define the queryset to retrieve all Mission objects
    queryset = Mission.objects.all()
    # Specify the serializer class to be used for Mission objects
    serializer_class = MissionSerializer

# ViewSet for handling Robot model CRUD operations
class RobotViewSet(viewsets.ModelViewSet):
    # Define the queryset to retrieve all Robot objects
    queryset = Robot.objects.all()
    # Specify the serializer class to be used for Robot objects
    serializer_class = RobotSerializer