C-Pruefung - GitHub Actions Upload ohne Kommandozeile

Diese ZIP ist eine bereinigte GitHub-Source-Version ohne BAT-Skripte. Sie ist gedacht, falls Klinik-PCs Batch-Dateien oder Installationsskripte blockieren.

So gehst du vor:
1. ZIP entpacken.
2. Den Inhalt dieses Ordners in dein GitHub-Repository hochladen.
3. Wichtig: Der Ordner .github muss mit hochgeladen werden. Falls du ihn unter Windows nicht siehst, aktiviere im Explorer: Ansicht > Anzeigen > Ausgeblendete Elemente.
4. In GitHub muss danach diese Datei existieren:
   .github/workflows/build-windows.yml
5. Dann unter GitHub > Actions den Workflow starten.

Falls .github nicht hochgeladen werden kann:
1. In GitHub auf Add file > Create new file klicken.
2. Als Dateiname exakt eingeben:
   .github/workflows/build-windows.yml
3. Den Inhalt aus workflow-zum-kopieren/build-windows.yml.txt hineinkopieren.
4. Commit changes klicken.
