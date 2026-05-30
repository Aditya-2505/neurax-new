import ftplib
import os
import getpass
import socket
from pathlib import Path

HOST = "199.250.208.111"
USERNAME = "adithya@unicointl.com"
REMOTE_DIR = "/neuro"
LOCAL_DIR = r"c:\Users\tbila\OneDrive\Desktop\nuro\nuro-app-final\dist"

def make_dirs(ftp, path):
    """Create remote directories recursively."""
    parts = [p for p in path.split("/") if p]
    for part in parts:
        try:
            ftp.mkd(part)
        except ftplib.error_perm:
            pass  # Already exists
        ftp.cwd(part)

def upload_dir(ftp, local_path):
    """Recursively upload a local directory to the current FTP directory."""
    for item in Path(local_path).iterdir():
        if item.is_dir():
            try:
                ftp.mkd(item.name)
                print(f"  Created dir: {item.name}")
            except ftplib.error_perm:
                pass  # Already exists
            ftp.cwd(item.name)
            upload_dir(ftp, item)
            ftp.cwd("..")
        else:
            with open(item, "rb") as f:
                ftp.storbinary(f"STOR {item.name}", f)
                print(f"  Uploaded: {item.name}")

def custom_makepasv(ftp):
    # Send PASV, but support both 227 and 229 responses returned by the server
    resp = ftp.sendcmd('PASV')
    if resp.startswith('229'):
        return ftplib.parse229(resp, ftp.sock.getpeername())
    return ftplib.parse227(resp)

def main():
    print("=" * 50)
    print("  NeuraX - FTP Deployment")
    print("=" * 50)
    print(f"  Host     : {HOST}")
    print(f"  Username : {USERNAME}")
    print(f"  Local    : {LOCAL_DIR}")
    print(f"  Remote   : {REMOTE_DIR}")
    print("=" * 50)

    password = "voBQBpYpTcrp"

    print("\nConnecting to FTP server...")
    try:
        ftp = ftplib.FTP()
        ftp.connect(HOST, 21, timeout=30)
        ftp.login(USERNAME, password)
        ftp.af = socket.AF_INET
        ftp.makepasv = lambda: custom_makepasv(ftp)
        print("Connected successfully!\n")

        print("Uploading files...")
        make_dirs(ftp, REMOTE_DIR)
        upload_dir(ftp, LOCAL_DIR)

        ftp.quit()
        print("\nDeployment complete!")
        print(f"Site should be live at: http://unicointl.com/adithya/neuro")

    except ftplib.error_perm as e:
        print(f"\nFTP Error: {e}")
    except ConnectionRefusedError:
        print("\nError: Could not connect to the FTP server. Check IP/port.")
    except Exception as e:
        print(f"\nUnexpected error: {e}")

if __name__ == "__main__":
    main()
