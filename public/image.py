from js import __NUXT__  # type:ignore
import js # type:ignore
from pyodide.ffi import create_proxy # type:ignore
import asyncio
import io
from PIL import Image
import pyodide # type:ignore
import imagehash # type:ignore


async def py_getBlob(files: pyodide.ffi.JsProxy):
    for i,f in enumerate(files):
        hash = await file_to_hash(f.blob)
        update_image_details(i,hash)

def tigger_update(element: pyodide.ffi.JsProxy):
    element.blur()

async def file_to_hash(f: pyodide.ffi.JsProxy) -> imagehash.ImageHash:
    data = js.Uint8Array.new(await f.arrayBuffer())
    binary_data = io.BytesIO(bytearray(data))
    img = byte_to_img(binary_data)
    hash = imagehash.average_hash(img)

    return str(hash)


def byte_to_img(data: io.BytesIO) -> Image.Image:
    img = Image.open(data)
    return img


def get_image_hash(imgs):
    print(123)

def update_image_details(index:int,hash:str):
    all_images = __NUXT__.pinia.image.allImages #type : pyodide.ffi.JsProxy
    image = all_images[index]
    image.hash=hash

def listen_btn():
    js.document.querySelector('#ScanBtn').addEventListener('click',create_proxy(main))

async def main(event):
    if __NUXT__.pinia.image.allImages : 
        await py_getBlob(__NUXT__.pinia.image.allImages)
        tigger_update(event.target)
    else:
        js.console.log('target.files is empty')

listen_btn()
