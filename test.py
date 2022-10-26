import os

command1 = "holehe "
command2 = " --only-used"

with open("/home/zeus/Schreibtisch/Dienst/Autohaus Nissan/Emails_aktiv.txt") as file:
    for line in file:
        email = line.strip()
        os.system(command1+email+command2)
        
        


