from django.db import models

class Robot(models.Model):
    # The name of the robot
    name = models.CharField(max_length=100)
    # The model name of the robot
    model_name = models.CharField(max_length=100)

    def __str__(self):
        # Return the name of the robot when the object is printed
        return self.name

class Mission(models.Model):
    # The name of the mission
    name = models.CharField(max_length=100)
    # A detailed description of the mission
    description = models.TextField()
    # A foreign key relationship to the Robot model
    robot = models.ForeignKey(Robot, on_delete=models.CASCADE)

    def __str__(self):
        # Return the name of the mission when the object is printed
        return self.name