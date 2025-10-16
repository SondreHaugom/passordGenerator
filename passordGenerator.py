# Laget av Sondre Haugom

# importer random biblioteket
import random

# funksjon for å generere passord
def generer_passord(lengde): 
    # kjører alt innenfor while løkken så lenge brukeren ikke skriver inn et gyldig tall
    while True:
        # be brukeren om å skrive inn ønsket lengde på passordet
        lengde = int(input("Skriv inn ønsket lengde på passordet (minst 8 tegn): "))
        # sjekker om lengden er gyldig
        if lengde < 8: 
            print("Passordet må være minst 8 tegn langt. Vennligst prøv igjen.")
            continue
        # sjekker om lengden er for lang
        elif lengde > 20:
            print("Passordet kan ikke være lengre enn 20 tegn. Vennligst prøv igjen.")
            continue
        # hvis lengden er gyldig, generer passordet
        else: 
            tegn = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
            passord = ''.join(random.choice(tegn) for _ in range(lengde))
            return passord
# kaller funksjonen og skriver ut det genererte passordet        
print("Ditt nye passord er: " + generer_passord(8))

