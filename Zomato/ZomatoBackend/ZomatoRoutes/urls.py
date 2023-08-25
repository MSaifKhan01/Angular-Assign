from django.urls import path
from . import views
urlpatterns = [
    path('create', views.CreateMenu,name='create'),
    path('get', views.GetMenu,name='get'),
    path('update/<int:itemid>/', views.UpdateMenu,name='update'),
    path('delete/<int:itemid>/', views.Delete,name='delete'),
]