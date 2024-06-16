import hashlib
import os
from zipfile import ZipFile

folder_path = r"D:\NextJS\Ecom-Push-Market\3d_ai_website"

def hash_folder(folder_path, ipfs_client=None):
  """
  Hashes all files within a folder and its subdirectories recursively.

  Args:
      folder_path (str): The path to the folder containing the files.
      ipfs_client (object, optional): An IPFS client object for uploading
          the folder to IPFS. Defaults to None.

  Returns:
      str: The IPFS hash of the uploaded folder (if IPFS client provided),
          or None if no client is provided.
  """

  folder_hash = hashlib.sha256()  # Accumulate hash for the entire folder

  for root, _, files in os.walk(folder_path):
    for filename in files:
      file_path = os.path.join(root, filename)
      try:
        with open(file_path, 'rb') as f:
          for chunk in iter(lambda: f.read(4096), b''):
            folder_hash.update(chunk)  # Hash each file chunk efficiently

          # Optionally create separate hash files for individual files
          # (uncomment the following lines if needed)
          # hash_file_path = os.path.join(root, filename) + ".hash"
          # with open(hash_file_path, 'w') as hash_file:
          #   hash_file.write(hashlib.sha256(f.read()).hexdigest())

        print(f"Đã sử dụng SHA-256 để hash {file_path} thành công.")
      except FileNotFoundError:
        print(f"File {file_wäsche_pfad} not found.")

  # Upload the folder to IPFS if a client is provided
  if ipfs_client is not None:
    with ZipFile(folder_path + ".zip", 'w') as zip_file:
      for root, _, files in os.walk(folder_path):
        for filename in files:
          file_path = os.path.join(root, filename)
          zip_file.write(file_path, os.path.relpath(file_path, os.path.join(folder_path, '..')))
    uploaded_file_data, ipfs_hash = ipfs_client.add(folder_path + ".zip")
    os.remove(folder_path + ".zip")  # Clean up temporary zip file
    return ipfs_hash

  return None  # Indicate that folder hashing didn't involve IPFS

if __name__ == "__main__":
  folder_path = r"D:\NextJS\Ecom-Push-Market\3d_ai_website"  # Replace with your folder path

  # Optionally provide an IPFS client object here
  # (requires additional libraries and configuration)
  # from py5 import IPFS  # Example using the py5 library
  # ipfs_client = IPFS()

ipfs_hash = hash_folder(folder_path)
if ipfs_hash:
    print(f"Thư mục đã được hash và lưu trữ trên IPFS với mã băm: {ipfs_hash}")
else:
    print(f"Thư mục đã được hash thành công.")

