import hashlib
import os

def hash_cpp_file(file_path, hash_file_path):
    BUF_SIZE = 65536 
    sha256_hash = hashlib.sha256()

    try:
        with open(file_path, 'rb') as cpp_file:
            while True:
                data = cpp_file.read(BUF_SIZE)
                if not data:
                    break
                sha256_hash.update(data)
        hash_hex = sha256_hash.hexdigest()
        hash_file_path = os.path.join(os.path.dirname(file_path), 'hash.txt')
        with open(hash_file_path, 'w') as hash_file:
            hash_file.write(hash_hex)

        print(f"Đã sử dụng SHA-256 để hash{file_path} thành công.")
        print(f"File đã hash được lưu tại {hash_file_path}.")
    except FileNotFoundError:
        print(f"File {file_path} not found.")

file_path = r"C:\Users\admin\Documents\HelloWorld\HelloWorld\HelloWorld.cpp"
cpp_file_path = r"C:\Users\admin\Documents\HelloWorld\HelloWorld"

hash_cpp_file(file_path, cpp_file_path)