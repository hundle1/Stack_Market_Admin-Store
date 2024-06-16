import hashlib
import os
import ipfshttpclient

def hash_files(folder_path, ipfs_hash):
    BUF_SIZE = 65536
    try:
        ipfs = ipfshttpclient.connect("/ip4/127.0.0.1/tcp/5001") # Replace with your IPFS node address and port
    except Exception as e:
        print(f"Kết nối đến IPFS không thành công: {e}")
        return

    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            try:
                sha256_hash = hashlib.sha256()
                with open(file_path, 'rb') as file:
                    while True:
                        data = file.read(BUF_SIZE)
                        if not data:
                            break
                        sha256_hash.update(data)
                        print(f"Đã sử dụng SHA-256 để hash {file_path} thành công.")
                hash_hex = sha256_hash.hexdigest()

                sub_dir_hash = ipfs.add(file_path)

                ipfs.add_pin(file_path, pinning_name=filename, hash=hash_hex)

                parent_manifest = ipfs.get(ipfs_hash)
                if not parent_manifest:
                    parent_manifest = {}
                parent_manifest[filename] = {
                    'hash': sub_dir_hash,
                    'size': os.path.getsize(file_path)
                }
                ipfs.add_pin(parent_manifest, hash=ipfs_hash)
                print(f"Sản phẩm đã hash được lưu trên IPFS với hash {sub_dir_hash}.")
            except FileNotFoundError:
                print(f"Dữ liệu {file_path} không khả dụng.")

folder_path = input("Nhập đường dẫn thư mục: ")
ipfs_hash = input("Nhập IPFS hash của thư mục cha: ")

hash_files(folder_path, ipfs_hash)
