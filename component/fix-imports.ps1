$files = Get-ChildItem -Path ".\src" -Recurse -Include "*.tsx"
foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $content = $content -replace '@radix-ui/([^@]+)@\d+\.\d+\.\d+', '@radix-ui/$1'
    $content = $content -replace 'class-variance-authority@\d+\.\d+\.\d+', 'class-variance-authority'
    Set-Content $file $content
}
