import ftplib
import socket

HOST = "199.250.208.111"
USERNAME = "adithya@unicointl.com"
PASSWORD = "voBQBpYpTcrp"
REMOTE_DIR = "/neuro"

def delete_dir_recursive(ftp, path):
    """Recursively delete a remote directory and all its contents."""
    try:
        ftp.cwd(path)
    except ftplib.error_perm:
        print(f"  Could not enter dir: {path}")
        return

    # List contents
    try:
        names = ftp.nlst()
    except ftplib.error_perm:
        # Empty directory listing or perm error
        names = []

    for name in names:
        if name in ('.', '..'):
            continue
        
        # We need to distinguish between files and subdirectories.
        # Since nlst doesn't tell us, we try to delete it as a file first.
        try:
            ftp.delete(name)
            print(f"  Deleted file: {name}")
        except ftplib.error_perm:
            # If delete fails, it is likely a directory, so recurse
            delete_dir_recursive(ftp, name)

    # Move up and delete the directory itself
    ftp.cwd("..")
    try:
        ftp.rmd(path)
        print(f"  Removed dir: {path}")
    except ftplib.error_perm as e:
        print(f"  Error removing dir {path}: {e}")

def custom_makepasv(ftp):
    resp = ftp.sendcmd('PASV')
    if resp.startswith('229'):
        return ftplib.parse229(resp, ftp.sock.getpeername())
    return ftplib.parse227(resp)

def main():
    print("=" * 50)
    print("  NeuraX - FTP Undeployment")
    print("=" * 50)
    print(f"  Host     : {HOST}")
    print(f"  Username : {USERNAME}")
    print(f"  Target   : {REMOTE_DIR}")
    print("=" * 50)

    print("\nConnecting to FTP server...")
    try:
        ftp = ftplib.FTP()
        ftp.connect(HOST, 21, timeout=30)
        ftp.login(USERNAME, PASSWORD)
        ftp.af = socket.AF_INET
        ftp.makepasv = lambda: custom_makepasv(ftp)
        print("Connected successfully!\n")

        print("Removing remote files in /neuro...")
        # Start recursion by entering REMOTE_DIR and clearing/removing it
        delete_dir_recursive(ftp, REMOTE_DIR)

        ftp.quit()
        print("\nUndeployment complete! /neuro path is removed.")

    except Exception as e:
        print(f"\nUnexpected error during undeployment: {e}")

if __name__ == "__main__":
    main()
