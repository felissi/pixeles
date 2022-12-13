from js import __NUXT__  # type:ignore
import js
from pyodide.ffi import create_proxy
import asyncio
import io
from PIL import Image
import pyodide
import imagehash
# createObject(create_proxy(globals()), "pyodideGlobals")


async def py_getBlob(files):
    files = files #type : pyodide.ffi.JsProxy
    # print(f'files {dir(files)}')
    for i,f in enumerate(files):
        # print(f'file name is {f.name}')
        # print(f'keys of f={f.object_keys()}')
        hash = await file_to_hash(f.blob)
        update_image_details(i,hash)
        # print(hash)


async def file_to_hash(f: pyodide.ffi.JsProxy) -> imagehash.ImageHash:
    data = js.Uint8Array.new(await f.arrayBuffer())
    binary_data = io.BytesIO(bytearray(data))
    # print(binary_data)
    img = byte_to_img(binary_data)
    # print(img)
    hash = imagehash.average_hash(img)
    # print(type(hash))
    # print(hash.hash)
    # print(f'str = {type(str(hash))} = {str(hash)}')

    return str(hash)


def byte_to_img(data: io.BytesIO) -> Image.Image:
    img = Image.open(data)
    return img


def get_image_hash(*args, **kwargs):
    return imagehash.average_hash

def update_image_details(index:int,hash:str):
    all_images = __NUXT__.pinia.image.allImages #type : pyodide.ffi.JsProxy
    image = all_images[index]
    image.hash=hash

def listen_btn():
    js.document.querySelector('#ScanBtn').addEventListener('click',create_proxy(main))

async def main(event):
    if __NUXT__.pinia.image.allImages : 
        # print(__NUXT__.pinia.image.allImages)
        await py_getBlob(__NUXT__.pinia.image.allImages)
    else:
        print('target.files is empty')
    # for i in __NUXT__.pinia.image.inputImages:

    #     __NUXT__.pinia.image.allImages.push(py_getBlob(i))
    #     # print(i)
    #     pass
    # __NUXT__.pinia.image.inputImages = create_proxy(
    #     {'name': '123', 'size': '1234'})
    # print(__NUXT__.pinia.image.inputImages)

listen_btn()
# main()
