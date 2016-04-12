// dados de pacotes ir para o rfx9600:

//------------------------------------------------------------------------- receiver Panasonic SA-HE100:
var pan = {
	volUp:	"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00",
	volDn:	"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00",
	power:	"FF FF 02 69 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 50 E2 F7 40 00 36 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 5F FB AE 40 00 10 00 00",
	dvd:	"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00",
	chan:	"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00",
	mute:	"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00",
	Dn:		"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00",
	up:		"FF FF 01 3E 01 00 00 08 0A 05 52 62 A9 00 41 54 4A 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 F9 FC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 40 4F AC 60 5A 72 50 E2 F7 40 00 36 C3 00 00 00 00 00"
};
//------------------------------------------------------------------------- luz
var luz = {
	v25:	"FF FF 00 ED 01 00 00 08 0A 05 21 66 DF 37 43 6D E5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 50 79 DA 40 00 30 66 DF 37 41 B4 AF 60 70 D6 51 25 92 40 00 08 C3 00 00 D2 00 00",
	v50:	"FF FF 00 ED 01 00 00 08 0A 05 21 66 DF 37 43 6D E5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 40 6B DE 60 70 D6 41 48 60 60 70 D6 40 6B DE 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 50 79 DA 40 00 30 66 DF 37 41 B4 AF 60 6B B5 51 25 A6 40 00 29 C3 00 00 D2 00 00",
	dn:		"FF FF 00 DE 01 00 00 08 0A 05 21 66 DF 37 43 6D E5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 50 79 DA 40 00 30 C3 00 00 00 00 00",
	up:		"FF FF 00 DE 01 00 00 08 0A 05 21 66 DF 37 43 6D E5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 48 60 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 48 60 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 50 79 DA 40 00 30 C3 00 00 00 00 00"
};
//------------------------------------------------------------------------- receiver Pioneer VSX-604S:
var pio = {
	power:	"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	on:		"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	off:	"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	volUp:	"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	volDn:	"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	mute:	"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	vcr:	"FF FF 00 DE 01 00 00 08 0A 05 21 66 D4 F5 43 73 13 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 40 6B EB 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 41 48 6D 60 6B B5 50 72 7A 40 00 2B C3 00 00 00 00 00",
	cd:		"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	tuner:	"FF FF 00 DE 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00",
	prolog:	"FF FF 01 AD 01 00 00 08 0A 04 E5 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 50 86 15 40 00 22 66 E2 08 43 71 86 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 41 47 DE 60 6B AE 40 6B 8E 60 6B AE 40 6B 8E 60 6B AE 50 86 15 40 00 22 C3 00 00 00 00 00 00"
};
//------------------------------------------------------------------------- barra de leds RGB:
var led = {
	on:		"FF FF 00 B7 01 00 00 08 0A 05 21 66 CF D4 43 63 80 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 C3 00 00 A5 00 xx",
	off:	"FF FF 00 E9 01 00 00 08 0A 05 21 66 CF D4 43 68 C6 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 50 7C 42 40 00 18 66 CF D4 41 B4 A4 60 70 D6 5F FB B4 40 00 32 00 00",
	w:		"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 00 00",
	r:		"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 00 00",
	r1:		"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 50 7C 56 40 00 2C 66 D4 F5 41 B4 C9 60 6B B5 5F FB B4 40 00 3F 00 00",
	r2:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 CF D4 43 68 C6 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 50 7C 56 40 00 2C 66 CF D4 41 B4 A4 60 70 D6 51 23 53 40 00 3A 66 CF D4 41 B4 A4 60 70 D6 5F FB B4 40 00 32 xx xx",
	r3:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 CF D4 43 68 C6 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 50 7C 56 40 00 2C 66 CF D4 41 B4 A4 60 70 D6 51 23 53 40 00 3A 66 CF D4 41 B4 A4 60 70 D6 5F FB B4 40 00 32 xx xx",
	r4:		"FF FF 00 ED 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 40 6B EB 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 43 59 60 70 D6 40 6B DE 60 6B B5 41 43 59 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 40 6B EB 60 70 D6 41 43 4C 60 6B B5 40 6B EB 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 50 7C 56 40 00 2C 66 D4 F5 41 B4 C9 60 6B B5 51 23 54 40 00 07 C3 00 00 D2 00 xx",
	g:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 51 23 3E 40 00 34 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 xx xx",
	g1:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 D4 F5 43 68 EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 51 23 53 40 00 3A 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 xx xx",
	g2:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 51 23 53 40 00 3A 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 xx xx",
	g3:		"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 68 EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 00 00",
	g4:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 D4 F5 43 68 EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 51 23 3E 40 00 34 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 xx xx",
	b:		"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 68 EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 50 7C 56 40 00 39 66 D4 F5 41 B4 C9 60 70 D6 5F FB B4 40 00 32 00 00",
	b1:		"FF FF 00 F8 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 50 7C 56 40 00 2C 66 D4 F5 41 B4 C9 60 6B B5 51 23 54 40 00 07 66 D4 F5 41 B4 C9 60 6B B5 5F FB B4 40 00 3F xx xx",
	b2:		"FF FF 00 FC 01 00 00 08 0A 05 21 66 CF D4 43 68 C6 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 50 7C 56 40 00 2C 66 CF D4 41 B4 A4 60 70 D6 51 23 53 40 00 3A 66 CF D4 41 B4 A4 60 70 D6 51 23 53 40 00 3A C3 00 00 E1 xx xx",
	b3:		"FF FF 00 FC 01 00 00 08 0A 05 21 66 CF D4 43 68 C6 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 43 4C 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 43 4C 60 6B B5 41 43 59 60 70 D6 50 7C 56 40 00 2C 66 CF D4 41 B4 A4 60 70 D6 51 23 53 40 00 3A 66 CF D4 41 B4 A4 60 70 D6 51 23 53 40 00 3A C3 00 00 E1 xx xx",
	b4:		"FF FF 00 DA 01 00 00 08 0A 05 21 66 CF D4 43 68 C6 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 5F FB B4 40 00 32 00 00",
	fsh:	"FF FF 00 C3 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 C3 00 00 B1 00 xx",
	stb: 	"FF FF 00 C3 01 00 00 08 0A 05 21 66 D4 F5 43 68 EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 C3 00 00 B1 00 xx",
	fad:	"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 50 7C 56 40 00 2C 66 D4 F5 41 B4 C9 60 6B B5 5F FB B4 40 00 3F 00 00",
	smt:	"FF FF 00 E9 01 00 00 08 0A 05 21 66 D4 F5 43 63 A5 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 41 43 4C 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 40 6B DE 60 70 D6 40 6B DE 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 40 6B EB 60 70 D6 41 48 60 60 6B B5 41 48 6D 60 70 D6 41 43 4C 60 70 D6 50 7C 56 40 00 2C 66 D4 F5 41 B4 C9 60 6B B5 5F FB B4 40 00 3F 00 00"
};