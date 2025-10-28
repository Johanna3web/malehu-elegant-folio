-- Create storage buckets for portfolio uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('profile-pictures', 'profile-pictures', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('certificates', 'certificates', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'application/pdf']),
  ('project-images', 'project-images', true, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp']),
  ('resumes', 'resumes', true, 10485760, ARRAY['application/pdf'])
ON CONFLICT (id) DO NOTHING;

-- Create RLS policies for public access to profile pictures
CREATE POLICY "Public Access for Profile Pictures"
ON storage.objects FOR SELECT
USING (bucket_id = 'profile-pictures');

CREATE POLICY "Anyone can upload profile pictures"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'profile-pictures');

CREATE POLICY "Anyone can update profile pictures"
ON storage.objects FOR UPDATE
USING (bucket_id = 'profile-pictures');

-- Create RLS policies for certificates
CREATE POLICY "Public Access for Certificates"
ON storage.objects FOR SELECT
USING (bucket_id = 'certificates');

CREATE POLICY "Anyone can upload certificates"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'certificates');

-- Create RLS policies for project images
CREATE POLICY "Public Access for Project Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'project-images');

CREATE POLICY "Anyone can upload project images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'project-images');

CREATE POLICY "Anyone can update project images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'project-images');

CREATE POLICY "Anyone can delete project images"
ON storage.objects FOR DELETE
USING (bucket_id = 'project-images');

-- Create RLS policies for resumes
CREATE POLICY "Public Access for Resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes');

CREATE POLICY "Anyone can upload resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Anyone can update resumes"
ON storage.objects FOR UPDATE
USING (bucket_id = 'resumes');