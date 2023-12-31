from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate,login,logout
from django.http import JsonResponse
import json
from django.core.serializers import serialize
# Create your views here.

def register(req):
    if req.method=="POST":
        body=json.loads(req.body)
        username=body.get('username')
        password=body.get('password')
        isUserpresent=User.objects.filter(username=username).exists()
        if(isUserpresent):
            return JsonResponse({"msg":"User already present"})
        
        hash_pass=make_password(password)
        user=User.objects.create(username=username,password=hash_pass)
        return JsonResponse({"msg":"Registration succesful"})
    else:
        return JsonResponse({"msg":"Registration failed"})
    
def Login(req):
    if req.method=="POST":
        body=json.loads(req.body)
        username=body.get('username')
        password=body.get('password')
        user=authenticate(username=username,password=password)
        if user is not None:
            login(req,user)
            userjson={
                "username":user.username,
                "password":user.password
            }
            return JsonResponse({"msg":"Login succesful","user":userjson})
        else:
           return JsonResponse({"msg":"login failed"}) 
    else:
        return JsonResponse({"msg":"Login failed"})
    
def Logout(req):
    logout(req)
    return JsonResponse({"msg":"Logout succesful"})

def DeleteUser(req,userid):
    if req.method=="DELETE":
        user=User.objects.get(id=userid)
        user.delete()
        return JsonResponse({"msg":"Deleted"})
    else:
        return JsonResponse({"msg":"some error"})