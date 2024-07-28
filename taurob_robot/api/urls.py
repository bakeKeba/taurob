from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MissionViewSet, RobotViewSet

router = DefaultRouter()
router.register(r'missions', MissionViewSet)
router.register(r'robots', RobotViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]