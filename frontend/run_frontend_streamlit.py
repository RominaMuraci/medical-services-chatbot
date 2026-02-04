"""
Run Streamlit frontend
"""
import subprocess
import sys
import os

if __name__ == "__main__":
    print("Starting Streamlit frontend...")
    print("Frontend will be available at http://localhost:8501")
    print("\nMake sure the API is running in another terminal:")
    print("  python run_api.py")
    
    # Run streamlit
    subprocess.run([
        sys.executable, "-m", "streamlit", "run", 
        "frontend_streamlit.py",
        "--server.port", "8501"
    ])

