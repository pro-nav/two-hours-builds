from PIL import Image, ImageOps
import numpy as np
np.set_printoptions(threshold=np.inf)

name = input("Enter file name: ")
im = Image.open(name)
im2 = ImageOps.grayscale(im)
im2.thumbnail((180, 300))
arr  = np.asarray(im2)
arr = (arr/255) * 10

arr = arr.astype(int)
arr = arr.astype(str)
arr = np.core.defchararray.replace(arr, "0", " ")
arr = np.core.defchararray.replace(arr, "1", ".")
arr = np.core.defchararray.replace(arr, "2", "-")
arr = np.core.defchararray.replace(arr, "3", "+")
arr = np.core.defchararray.replace(arr, "4", "o")
arr = np.core.defchararray.replace(arr, "5", "*")
arr = np.core.defchararray.replace(arr, "6", "#")
arr = np.core.defchararray.replace(arr, "7", "%")
arr = np.core.defchararray.replace(arr, "8", "@")

c = ""
for line in arr :
    for char in line :
        c = c + char + " "
    c = c + "\n"

f = open("output.txt", "a")
f.write(c)
f.close()
